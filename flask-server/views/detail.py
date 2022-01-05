from flask import Blueprint, jsonify, request, session
from models.users import *
from models.movie import *
from models.review import *
from models.users import *
from models.favorite import *
import json
import datetime
from pytz import timezone

bp = Blueprint("movies", __name__, url_prefix="/movies")

@bp.route('/detail/<int:movie_idx>', methods=['GET', 'POST', 'PATCH', 'DELETE'])
def detail(movie_idx):
    method = request.method
    
    if method == "GET":
        # movie_tb에서 해당하는 movie_idx의 정보를 가져온다.
        movie_info = Movie.query.filter(Movie.movie_idx == movie_idx).first()

        movie_infos = {
            "movie_title" : movie_info.movie_title, 
            "movie_year" : movie_info.movie_year, 
            "movie_film_festival" : movie_info.movie_film_festival, 
            "movie_director" : movie_info.movie_director,
            "movie_field" : movie_info.movie_field, 
            "movie_award" : movie_info.movie_award,
            "movie_genre" : movie_info.movie_genre, 
            "movie_img_link" : movie_info.movie_img_link,
            "movie_rating": movie_info.movie_rating, 
            "movie_runtime" : movie_info.movie_runtime, 
            "movie_prodYear" : movie_info.movie_prodYear, 
            "movie_actors" : movie_info.movie_actors,
            "movie_plot" : movie_info.movie_plot, 
            "movie_stills" : movie_info.movie_stills
        }

        # reivew_tb 에서 해당하는 movie_idx의 모든 리뷰를 가져와서 최신순 정렬.
        reviews = Review.query.filter((Review.movie_idx == movie_idx) & (Review.is_deleted == 0)).order_by(Review.review_date.desc()).all()
        
        movie_review = []
        for review in reviews:
            movie_review.append({
                'review_idx' : review.review_idx, 
                "user_id" : review.user_id, 
                "review_content" : review.review_content, 
                "review_rating" : review.review_rating,
                "review_date": str(review.review_date)
            })

        movie_reviews = dict(list(enumerate(movie_review, start=0)))

        # 로그인을 한 상태.
        if session['user'] != None:
            favorite_user_idx = session['user']
        # favorite에서 movie_idx와 같은 영화를 가져온다.
            favorite_info = Favorite.query.filter(Favorite.movie_idx == movie_idx, Favorite.user_idx == favorite_user_idx).first()
        
            if favorite_info != None:
                favorite_status = "doing"
            else:
                favorite_status = "stop"

            print(favorite_status)
        else :
            favorite_status = "stop"

        return jsonify(
            movie_infos, 
            movie_reviews,
            {"dibs": favorite_status}
            )

    
    # 댓글 추가 : 리뷰 테이블에 값 추가
    elif method == "POST":

        # fe -> be json데이터 전달 받음
        review = request.get_json()
        
        # 리뷰테이블에 새로운 리뷰 저장
        if review != None:
            user_idx = review['user_idx']
            movie_idx = movie_idx

            # 유저가 리뷰를 작성한 적 없으면 저장
            user_idx = User.query.filter(User.user_idx == user_idx).first()
            same_reviewer = Review.query.filter((Review.movie_idx == movie_idx) & (Review.user_idx == user_idx)).first()
            
            if not same_reviewer:
                review_content = review['content']
                review_rating = review['rating']
                review_date = datetime.datetime.now(timezone('Asia/Seoul'))

                new_review = Review(movie_idx, user_idx, review_content, review_rating, review_date)
                db.session.add(new_review)
                db.session.commit()
                print("리뷰가 저장되었습니다.")
                return jsonify({"result":"success"})

            # 유저가 리뷰를 작성한 적 있으면
            else:
                return jsonify({"result":"failed"})

        # fe에서 none 값을 보내줬다면
        return jsonify({"result":"fail"})

    # 댓글 수정
    elif method == "PATCH":
        # fe -> be json데이터 전달 받음
        review_update = request.get_json()

        user_idx = review_update['user_idx']
        movie_idx = movie_idx
        review_content = review_update['content']
        review_rating = review_update['rating']

        # 유저가 작성한 리뷰 찾아 수정
        user_idx = User.query.filter(User.user_idx == user_idx).first()
        update_review = Review.query.filter((Review.movie_idx == movie_idx) & (Review.user_idx == user_idx)).first()
        update_review.review_content = review_content
        update_review.review_rating = review_rating 
        update_review.review_date = datetime.datetime.now(timezone('Asia/Seoul'))
        db.session.commit()
        return jsonify({"result":"success"})

    # 댓글 삭제
    else:
        review_delete = request.get_json()
        
        user_idx = review_delete['user_idx'] 
        movie_idx = movie_idx

        # 유저가 작성한 리뷰 찾아 삭제
        user_idx = User.query.filter(User.user_idx == user_idx).first()
        Review.query.filter((Review.movie_idx == movie_idx) & (Review.user_id == user_id)).delete()
        db.session.commit()
        return jsonify({"result":"success"})