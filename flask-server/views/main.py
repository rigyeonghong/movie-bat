from flask import Blueprint, jsonify, request, session
from models.movie import *
from models.score import *
from models.users import *

import json

bp = Blueprint("main", __name__, url_prefix="/main")

# 장르별로 가져오기
@bp.route('/', methods=['GET', 'POST'])
def main():
    
    # DB에서 영화테이블 모두 가져온다.
    movies = Movie.query.filter().order_by(Movie.movie_img_link.desc().nullslast()).order_by(Movie.movie_field.desc().nullslast()).all()

    # DB에서 장르Column 중복 없이 가져온다.
    genre = Movie.query.with_entities(Movie.movie_genre).distinct()
    
    genres = []
    for g in genre:
        genres.append((str(g).replace("'", '').replace(',', '  ').replace('(', '').replace(')', '').split()))
    # print(genres) # [['다큐멘터리'], ['기타'], ['애니메이션'], ['애니메이션', '다큐멘터리'], ['드라마']]
    # print(len(genres))

    # 장르칼람에 장르 몇개가 들어가있는지 보기.
    max_genres = 0
    for a in range(len(genres)):
        # print(len(genres[a]))
        if max_genres < len(genres[a]):
            max_genres = len(genres[a])
    # print(max_genres)

    # 장르가 2개 이상 묶여 있는 것들 뺀 리스트.
    one_genre = []
    for one in range(len(genres)):
        if len(genres[one]) < 2:
            one_genre.append(str(genres[one]).replace('[', '').replace(']', '').replace("'",''))
    # print(one_genre) # ['다큐멘터리', '기타', '애니메이션', '드라마']
    # print(len(one_genre))
    
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


# 러닝타임별 (movie_runtime 컬럼에 해당)
@bp.route('/runtime/<int:runtime>', methods=['GET', 'POST'])
def runtime(runtime):

    # 런타임에 해당하는 영상 점수순으로 위에서부터 20개 보내드림
    limit_num = 20

    # runtime 30분 이하
    if runtime <= 30:
        movie_select = Movie.query.filter(Movie.movie_runtime <= 30).order_by(Movie.movie_score.desc()).limit(limit_num)
        movie_selected = []
        for movie in movie_select:
            movie_selected.append({
                'movie_idx' : movie.movie_idx, 
                "movie_title" : movie.movie_title, 
                "movie_posterUrl" : movie.movie_img_link
            })

        movie_runtime_selected = dict(list(enumerate(movie_selected, start=0)))  
        return jsonify(movie_runtime_selected)

    # 30분 초과 60분 이하
    elif 30 < runtime <= 60:
        movie_select = Movie.query.filter((Movie.movie_runtime > 30) & (Movie.movie_runtime <= 60)).order_by(Movie.movie_score.desc()).limit(limit_num)
        movie_selected = []
        for movie in movie_select:
            movie_selected.append({
                'movie_idx' : movie.movie_idx, 
                "movie_title" : movie.movie_title, 
                "movie_posterUrl" : movie.movie_img_link
            })

        movie_runtime_selected = dict(list(enumerate(movie_selected, start=0)))  
        return jsonify(movie_runtime_selected)

    # 60분 초과 90분 이하
    elif 60 < runtime <= 90:
        movie_select = Movie.query.filter((Movie.movie_runtime > 60) & (Movie.movie_runtime <= 90)).order_by(Movie.movie_score.desc()).limit(limit_num)
        movie_selected = []
        for movie in movie_select:
            movie_selected.append({
                'movie_idx' : movie.movie_idx, 
                "movie_title" : movie.movie_title, 
                "movie_posterUrl" : movie.movie_img_link
            })

        movie_runtime_selected = dict(list(enumerate(movie_selected, start=0)))  
        return jsonify(movie_runtime_selected)
    
    # 90분 초과
    else:
        movie_select = Movie.query.filter(Movie.movie_runtime > 90).order_by(Movie.movie_score.desc()).limit(limit_num)
        movie_selected = []
        for movie in movie_select:
            movie_selected.append({
                'movie_idx' : movie.movie_idx, 
                "movie_title" : movie.movie_title, 
                "movie_posterUrl" : movie.movie_img_link
            })

        movie_runtime_selected = dict(list(enumerate(movie_selected, start=0)))  
        return jsonify(movie_runtime_selected)


# 수상작 (movie_award 컬럼)
@bp.route('/award', methods=['GET', 'POST'])
def award():
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

    movie_runtime_selected = dict(list(enumerate(movie_selected, start=0)))  
    return jsonify(movie_runtime_selected)


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