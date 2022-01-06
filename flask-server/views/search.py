from flask import Blueprint, jsonify, request, session
from models.users import *
from models.movie import *
from models.review import *
from models.users import *
from models.favorite import *
import json

bp = Blueprint("search", __name__, url_prefix="/search/movies")

# 영화 이름 검색
@bp.route('/<string:movie_title>', methods=['GET'])
def search_title(movie_title):

    # 영화 이름 검색한 값에 맞는 영화 보내주기
    movies = Movie.query.filter(Movie.movie_title.like('%movie_title%')).all()

    search_movie = []
    for movie in movies:
        search_movie.append({
            'movie_idx' : movie.movie_idx, 
            "movie_title" : movie.movie_title, 
            "movie_posterUrl" : movie.movie_posterUrl, 
            "movie_genre" : movie.movie_genre
        })

    search_movies = dict(list(enumerate(search_movie, start=0)))    

    print(search_movies)
    return search_movies    
        

# 영화 감독 검색
@bp.route('/<string:director>', methods=['GET'])
def search_director(director):



# 영화 장르 검색
@bp.route('/<string:genre>', methods=['GET'])
def search_genre(genre):
        