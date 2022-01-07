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
    search_movie_title = Movie.query.filter(Movie.movie_title.like(search_content))

    search_movie_titles = []
    for movie in search_movie_title:
        search_movie_titles.append({
            'movie_idx' : movie.movie_idx, 
            "movie_title" : movie.movie_title, 
            "movie_posterUrl" : movie.movie_img_link, 
            "movie_genre" : movie.movie_genre
        })
    
    movie_title_searched = dict(list(enumerate(search_movie_titles, start=0)))  




    # 감독 이름에 검색한 값에 맞는 영화 보내주기
    search_director = Movie.query.filter(Movie.movie_director.like(search_content))

    search_directors = []
    for director in search_director:
        search_directors.append({
            'movie_idx' : director.movie_idx, 
            "movie_title" : director.movie_title, 
            "movie_posterUrl" : director.movie_img_link, 
            "movie_genre" : director.movie_genre
        })

    movie_director_searched = dict(list(enumerate(search_directors, start=0)))  



    # 장르에 검색한 값에 맞는 영화 보내주기
    search_genre = Movie.query.filter(Movie.movie_title.like(search_content))

    search_genres = []
    for genre in search_genre:
        search_genres.append({
            'movie_idx' : genre.movie_idx, 
            "movie_title" : genre.movie_title, 
            "movie_posterUrl" : genre.movie_img_link, 
            "movie_genre" : genre.movie_genre
        })

    movie_genre_searched = dict(list(enumerate(search_genres, start=0))) 

    print(movie_title_searched, movie_director_searched, movie_genre_searched)
    return jsonify(movie_title_searched, movie_director_searched, movie_genre_searched)
        
