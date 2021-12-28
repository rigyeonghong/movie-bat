from flask import Blueprint, jsonify, request, session
from models.movie import *

bp = Blueprint("main", __name__, url_prefix="/main")

@bp.route('/', methods=['GET', 'POST'])
def main():
    
    # DB에서 영화테이블 모두 가져온다.
    movies = Movie.query.filter().all()

    # DB에서 장르 중복 없이
    genre = Movie.query.with_entities(Movie.movie_genre).distinct()
    
    genres = []
    for g in genre:
        genres.append((str(g).replace("'", '').replace(',', '  ').replace('(', '').replace(')', '').split()))
    # print(genres) # [['다큐멘터리'], ['기타'], ['애니메이션'], ['애니메이션', '다큐멘터리'], ['드라마']]

    # DB(movies)에서 제목과 이미지를 가져온다.
    titles, images = [], []
    for movie in movies:
        titles.append(movie.movie_title)
    
    for movie in movies:
        images.append(movie.movie_img_link)

    movie = []
    
    # movie.append({"title": t, "posterUrl": u} for t, u in zip(titles, images))
    for i in range(len(movies)):
        for g in genres:
            
    
    
    return "main page"