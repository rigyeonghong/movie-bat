from flask import Blueprint, jsonify, request, session
from models.movie import *
import json

bp = Blueprint("main", __name__, url_prefix="/main")

@bp.route('/', methods=['GET', 'POST'])
def main():
    
    # DB에서 영화테이블 모두 가져온다.
    movies = Movie.query.filter().order_by(Movie.movie_img_link.desc().nullslast()).order_by(Movie.movie_field.desc().nullslast()).all()

    # DB에서 장르Column 중복 없이 가져온다.
    genre = Movie.query.with_entities(Movie.movie_genre).distinct()
    
    genres = []
    for g in genre:
        genres.append((str(g).replace("'", '').replace(',', '  ').replace('(', '').replace(')', '').split()))
    print(genres) # [['다큐멘터리'], ['기타'], ['애니메이션'], ['애니메이션', '다큐멘터리'], ['드라마']]

    # 장르가 2개 이상 묶여 있는 것들 뺀 리스트.
    one_genre = []
    for a in range(len(genres)):
        if len(genres[a]) < 2:
            one_genre.append(str(genres[a]).replace('[', '').replace(']', '').replace("'",''))
    # print(one_genre) # ['다큐멘터리', '기타', '애니메이션', '드라마']

    # DB(movies)에서 제목과 이미지를 가져온다.
    titles, images = [], []
    for movie in movies:
        titles.append([movie.movie_idx, movie.movie_title, movie.movie_genre])
    # print(titles) # [['황룡산', '다큐멘터리'], ['습지 장례법', '기타'], ['Trans-Continental-Railway', '기타'], ['씨티백', '다큐멘터리'], ['Video Noire', '애니메이션'], ['선율', '애니메이션,다큐멘터리'], ['외발자전거', '기타'], ['두 여자', '기타'], ['텐트틴트', '기타'], ['뭐해', '드라마']]
    

    for movie in movies:
        images.append(movie.movie_img_link)
    
    movie = {}
    
    # print({"title": t, "posterUrl": u} for t, u in zip(titles, images))
    for i in range(len(one_genre)):
        movie[i] = {
            "genre": str(one_genre[i]).replace('[', '').replace(']', '').replace("'",''),
            "movies": [{"idx": t[0], "title": str(t[1]), "posterUrl": str(u)} for t, u in zip(titles, images) if str(one_genre[i]) in str(t[2]) ]
        }
    # print(movie)
    
    # movie_data = json.dumps(movie, ensure_ascii=False)
    
    return jsonify(movie)