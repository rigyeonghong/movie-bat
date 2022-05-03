from flask import Blueprint, jsonify, request, session
from models.favorite import *
from models.movie import *

bp = Blueprint("favorite", __name__, url_prefix="/favorite")

@bp.route('/', methods=['POST'])
def wishlist():
    # fe -> be로 데이터 받아옴.
    wish = request.get_json()

    # 받아온 데이터가 존재하면
    if wish != None:
        movie_idx = wish['movie_idx']
        user_idx = wish['user_idx']
        favorite_data = wish['date']

        same_wish = Favorite.query.filter((Favorite.movie_idx == movie_idx) & (Favorite.user_idx == user_idx)).first()

        # 이미 추가한 찜이 아니면
        if not same_wish:
            print('찜이 완료되었습니다.')
            favorite_data = Favorite(movie_idx, user_idx, favorite_data)

            db.session.add(favorite_data)
            db.session.commit()

            return {"result":"success",
                    "content":"찜 완료"}, 200

        # 추가되어 있으면 삭제
        else:
            print("찜 리스트에서 삭제.")
<<<<<<< HEAD
=======
            
            Favorite.query.filter((Favorite.movie_idx == movie_idx) & (Favorite.user_idx == user_idx)).delete()
            db.session.commit()
            
>>>>>>> master
            return {"result": "delete",
                    "content": "찜 취소!"
                    }, 200



@bp.route('/<int:user_idx>', methods=['GET'])
def detail(user_idx):

    # db에서 찜 데이터 가져옴.
    wish_list = db.session.query(Movie.movie_idx, Movie.movie_img_link, Movie.movie_title, 
        Favorite.favorite_idx, Favorite.movie_idx, Favorite.user_idx, Favorite.favorite_date).filter(
        Movie.movie_idx == Favorite.movie_idx, Favorite.user_idx == user_idx).order_by(Favorite.favorite_date)
    
    wish_data = []
    for wish in wish_list:
        wish_data.append({
            'wish_idx': wish.favorite_idx,
            'movie_idx': wish.movie_idx,
            'movie_title': wish.movie_title,
            'movie_img_link': wish.movie_img_link,
            'user_idx': wish.user_idx,
            'favorite_date': wish.favorite_date
        })

    # 찜목록 dict형식으로 만들어줌.
    wish_datas = dict(list(enumerate(wish_data)))
    print(wish_datas)

    return jsonify(wish_datas)
