from flask import Blueprint, jsonify, request, session
from models.users import *
from models.movie import *
from models.review import *
from models.users import *
from models.favorite import *
import json

bp = Blueprint("search", __name__, url_prefix="/search/movies")

# 영화 이름 검색
@bp.route('/title/<string:search_content>', methods=['GET'])
def search_title(search_content):

    # 영화 이름 검색한 값에 맞는 영화 보내주기
    search_movies= Movie.query.filter(Movie.movie_title.like('%'+search_content+'%') | Movie.movie_director.like('%'+search_content+'%') | Movie.movie_genre.like('%'+search_content+'%')).all()
    print(search_content)
    search_movie = []
    for movie in search_movies:
        search_movie.append({
            'movie_idx' : movie.movie_idx, 
            "movie_title" : movie.movie_title, 
            "movie_posterUrl" : movie.movie_img_link, 
            "movie_genre" : movie.movie_genre
        })
    print(search_movie)

    movie_title_searched = dict(list(enumerate(search_movie, start=0)))  
    return movie_title_searched
