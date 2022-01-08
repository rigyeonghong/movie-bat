from flask import Blueprint, jsonify, request, session
from models.movie import *
from models.masterpiece import *
from models.score import *
import json

bp = Blueprint("main2", __name__, url_prefix="/main2")

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
    all_movies = Movie.query.filter().all()

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
    
    return jsonify(genre1, genre2)