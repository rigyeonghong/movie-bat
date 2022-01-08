from flask import Blueprint, jsonify, request, session
from models.movie import *
from models.score import *
from models.users import *
from models.masterpiece import *

import json

bp = Blueprint("main", __name__, url_prefix="/main")

# 장르별로 가져오기
@bp.route('/', methods=['GET', 'POST'])
def main():

    user_idx = session['user']

    # 유저가 선택한 장르 가져오기.
    user_master = Masterpiece.query.filter().all() # 상업영화
    user_all_genre = Score.query.filter(Score.user_idx == user_idx).first() # 유저가 선택한 장르

    # 유저 장르 2개 
    user_genre1 = int(user_all_genre.user_score_genre1)
    user_genre2 = int(user_all_genre.user_score_genre2)

    # print(user_genre1, user_genre2) # 4 13

    # 상업영화 장르와 유저장르 2개 
    mp_genre1 = ""
    mp_genre2 = ""
    for mp_genre in user_master:
        if mp_genre.masterpiece_idx == (user_genre1): # user_genre는 idx가 0부터 시작.
            mp_genre1 = mp_genre.masterpiece_genre
            # print(type(mp_genre1)) # class str
        if mp_genre.masterpiece_idx == (user_genre2):
            mp_genre2 = mp_genre.masterpiece_genre
            # print(mp_genre2) # SF

    # 영화목록 가져오기
    all_movies = Movie.query.filter().order_by(Movie.movie_score.desc()).all()

    movie_genre1 = []
    movie_genre2 = []
    for movie in all_movies:
        if len(movie.movie_genre.replace(',', ' ').split()) > 1 :
            for genre in (movie.movie_genre.replace(',', ' ').split()):
                if genre == mp_genre1:
                    # score_idx.append(idx)
                    movie_genre1.append({
                        'movie_idx': movie.movie_idx,
                        'movie_title': movie.movie_title,
                        'movie_posterUrl': movie.movie_img_link
                    })
                if genre == mp_genre2:
                    # score_idx.append(idx)
                    movie_genre2.append({
                        'movie_idx': movie.movie_idx,
                        'movie_title': movie.movie_title,
                        'movie_posterUrl': movie.movie_img_link
                    })    
        else:
            if movie.movie_genre.replace(',', ' ') == mp_genre1:
                # score_idx.append(idx)
                movie_genre1.append({
                        'movie_idx': movie.movie_idx,
                        'movie_title': movie.movie_title,
                        'movie_posterUrl': movie.movie_img_link
                })

            if movie.movie_genre.replace(',', ' ') == mp_genre2:
                # score_idx.append(idx)
                movie_genre2.append({
                        'movie_idx': movie.movie_idx,
                        'movie_title': movie.movie_title,
                        'movie_posterUrl': movie.movie_img_link
                })  

    genre1 = dict(list(enumerate(movie_genre1)))
    genre2 = dict(list(enumerate(movie_genre2)))
    print(len(movie_genre1))
    print(len(movie_genre2))

    # 런타임에 해당하는 영상 점수순으로 위에서부터 20개 보내드림
    limit_num = 20

    # 유저별 런타임
    user_time = User.query.filter(User.user_idx == user_idx).first()
    runtime = user_time.user_runningtime

    movie_runtime_selected = ""
    movie_selected = []

    # runtime 30분 이하
    if runtime <= 30:
        movie_select = Movie.query.filter(Movie.movie_runtime <= 30).order_by(Movie.movie_score.desc()).limit(limit_num)
        for movie in movie_select:
            movie_selected.append({
                'movie_idx' : movie.movie_idx, 
                "movie_title" : movie.movie_title, 
                "movie_posterUrl" : movie.movie_img_link
            })

    # 30분 초과 60분 이하
    elif 30 < runtime <= 60:
        movie_select = Movie.query.filter((Movie.movie_runtime > 30) & (Movie.movie_runtime <= 60)).order_by(Movie.movie_score.desc()).limit(limit_num)
        for movie in movie_select:
            movie_selected.append({
                'movie_idx' : movie.movie_idx, 
                "movie_title" : movie.movie_title, 
                "movie_posterUrl" : movie.movie_img_link
            })

    # 60분 초과 90분 이하
    elif 60 < runtime <= 90:
        movie_select = Movie.query.filter((Movie.movie_runtime > 60) & (Movie.movie_runtime <= 90)).order_by(Movie.movie_score.desc()).limit(limit_num)
        for movie in movie_select:
            movie_selected.append({
                'movie_idx' : movie.movie_idx, 
                "movie_title" : movie.movie_title, 
                "movie_posterUrl" : movie.movie_img_link
            })

    # 90분 초과
    else:
        movie_select = Movie.query.filter(Movie.movie_runtime > 90).order_by(Movie.movie_score.desc()).limit(limit_num)
        for movie in movie_select:
            movie_selected.append({
                'movie_idx' : movie.movie_idx, 
                "movie_title" : movie.movie_title, 
                "movie_posterUrl" : movie.movie_img_link
            }) 
    
    movie_runtime_selected = dict(list(enumerate(movie_selected, start=0))) 


    # award 수상이력 있는 영화를 score컬럼 기준 상위 20개 가져옴
    limit_num = 20
    movie_select = Movie.query.filter(Movie.movie_award != None).order_by(Movie.movie_score.desc()).limit(limit_num)
    movie_selected = []
    for movie in movie_select:
        movie_selected.append({
            'movie_idx' : movie.movie_idx, 
            "movie_title" : movie.movie_title, 
            "movie_posterUrl" : movie.movie_img_link
        })

    movie_select_selected = dict(list(enumerate(movie_selected, start=0)))  

    return jsonify(genre1, genre2, movie_runtime_selected, movie_select_selected)

# 감독별 (movie_director)
@bp.route('/director/<string:director>', methods=['GET', 'POST'])
def director(director):

    # award 수상이력 있는 영화를 score컬럼 기준 상위 10개 가져옴
    limit_num = 10
    movie_select = Movie.query.filter(Movie.movie_director == director).order_by(Movie.movie_score.desc()).limit(limit_num)
    movie_selected = []
    for movie in movie_select:
        movie_selected.append({
            'movie_idx' : movie.movie_idx, 
            "movie_title" : movie.movie_title, 
            "movie_posterUrl" : movie.movie_img_link
        })

    movie_runtime_selected = dict(list(enumerate(movie_selected, start=0)))  
    return jsonify(movie_runtime_selected)


# 배우별 (movie_actors)
@bp.route('/actor/<string:actor>', methods=['GET', 'POST'])
def actor(actor):
    # award 수상이력 있는 영화를 score컬럼 기준 상위 20개 가져옴
    limit_num = 20
    movie_select = Movie.query.filter(Movie.movie_actors.like('%'+actor+'%')).order_by(Movie.movie_score.desc()).limit(limit_num)
    movie_selected = []
    for movie in movie_select:
        movie_selected.append({
            'movie_idx' : movie.movie_idx, 
            "movie_title" : movie.movie_title, 
            "movie_posterUrl" : movie.movie_img_link
        })

    movie_runtime_selected = dict(list(enumerate(movie_selected, start=0)))  
    return jsonify(movie_runtime_selected)


# 영화제 출품작 (movie_film_festival)
@bp.route('/entry/<string:film_festival>', methods=['GET', 'POST'])
def entry(film_festival):
    # award 수상이력 있는 영화를 score컬럼 기준 상위 20개 가져옴
    limit_num = 20
    movie_select = Movie.query.filter(Movie.movie_film_festival == film_festival).order_by(Movie.movie_score.desc()).limit(limit_num)
    movie_selected = []
    for movie in movie_select:
        movie_selected.append({
            'movie_idx' : movie.movie_idx, 
            "movie_title" : movie.movie_title, 
            "movie_posterUrl" : movie.movie_img_link
        })

    movie_runtime_selected = dict(list(enumerate(movie_selected, start=0)))  
    return jsonify(movie_runtime_selected)


# 년도별 제작 영화 (movie_prodYear)
@bp.route('/prodyear/<int:prodyear>', methods=['GET', 'POST'])
def prodyear(prodyear):
    # award 수상이력 있는 영화를 score컬럼 기준 상위 20개 가져옴
    limit_num = 20
    movie_select = Movie.query.filter(Movie.movie_prodYear == prodyear).order_by(Movie.movie_score.desc()).limit(limit_num)
    movie_selected = []
    for movie in movie_select:
        movie_selected.append({
            'movie_idx' : movie.movie_idx, 
            "movie_title" : movie.movie_title, 
            "movie_posterUrl" : movie.movie_img_link
        })

    movie_runtime_selected = dict(list(enumerate(movie_selected, start=0)))  
    return jsonify(movie_runtime_selected)