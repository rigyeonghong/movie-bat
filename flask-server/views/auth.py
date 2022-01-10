from flask import Blueprint, request, session, flash, redirect, url_for, g, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from models.users import *
from models.score import *
from models.masterpiece import *
from models.movie import *
import time

bp = Blueprint("auth", __name__, url_prefix="/auth")


@bp.route('/signup/id', methods=['POST'])
def email():
    user = request.get_json()
    user_id = user['email']

    # user_id(email) 중복확인
    same_user = User.query.filter(User.user_id == user_id).first()
    
    if same_user:
        print(" 이미 존재하는 사용자입니다. ")
        return {"result":"failed",
                "content":"이미 존재하는 아이디입니다."}, 401

    else:
        print(" 아이디 중복 확인. ")
        return {"result":"success",
                "content":"아이디 중복 확인"}, 200


@bp.route('/signup/nick', methods=['POST'])
def nick():
    user = request.get_json()
    user_nick = user['nickname']

    # nickname 중복확인
    same_nick = User.query.filter(User.user_nick == user_nick).first()

    if same_nick:
        return {"result":"failed",
            "content":"이미 존재하는 닉네임입니다."}, 401
    
    else:
        print(" 닉네임 중복 확인. ")
        return {"result":"success",
                "content":"닉네임 중복 확인"}, 200


#회원가입 signup
@bp.route('/signup', methods=['GET', 'POST'])
def signup():
    # 코드 실행 시간
    start = time.time()

    # fe -> be json데이터 전달 받음.
    user = request.get_json()

    if user != None :
        user_id = user['email']
        user_pw = user['password']
        user_nick = user['nickname']
        user_number = user['phoneNum']
        user_genre1 = (user['genre1'] + 1) # fe에서 0으로 옴 be db idx는 1로 되어 있음.
        user_genre2 = (user['genre2'] + 1)
        user_runningtime = user['runningtime']
        user_region = user['region']
        
        print(user_genre1, user_genre2)
        #패스워드 암호화 해서 db에 저장
        user_pw_hash = generate_password_hash(user_pw)
        new_user = User(user_id, user_pw_hash, user_nick, user_number, user_runningtime, user_region)
        db.session.add(new_user)
        db.session.commit()

        # db에서 생성된 user_idx 가져오기
        user_saved = User.query.filter(User.user_id == user_id).first()
        user_idx = user_saved.user_idx

        # user식별값 user_idx와 fe에서 띄울 usr_nick 
        session['user_idx'] = user_idx
        session['nickname'] = user_nick

        # genre table 데이터 추가.
        new_genre = Score(user_idx, user_genre1, user_genre2)

        db.session.add(new_genre)
        db.session.commit()

        # 선택한 장르와 같은 movie_tb 영화 score 주기.
        movie_score_push = Movie.query.filter().all()
        
        # 유저가 선택한 장르 가져오기.
        user_master = Masterpiece.query.filter().all()
        for mp_genre in user_master:
            if mp_genre.masterpiece_idx == (user_genre1): # user_genre는 idx가 0부터 시작.
                mp_genre1 = mp_genre.masterpiece_genre
                # print(mp_genre1) 
            if mp_genre.masterpiece_idx == (user_genre2):
                mp_genre2 = mp_genre.masterpiece_genre
                # print(mp_genre2)

        score_idx = []
        for idx, movie in enumerate(movie_score_push):
            # print(type(movies.movie_genre))
            # print(idx, len(movies.movie_genre.replace(',', ' ').split()))
            if len(movie.movie_genre.replace(',', ' ').split()) > 1 :
                for genre in (movie.movie_genre.replace(',', ' ').split()):
                    if genre == mp_genre1:
                        score_idx.append(idx)
                    if genre == mp_genre2:
                        score_idx.append(idx)
            else:
                if movie.movie_genre.replace(',', ' ') == mp_genre1:
                    score_idx.append(idx)
                if movie.movie_genre.replace(',', ' ') == mp_genre2:
                    score_idx.append(idx)

        print(score_idx, len(score_idx))
        for movie_genre_score in movie_score_push:
            for score in score_idx: 
                if (score+1) == movie_genre_score.movie_idx: # score idx = 0, movie_genre idx = 1
                    movie_genre_score.movie_score += 5
                    print(score+1)
                    
                    db.session.add(movie_genre_score)
                    db.session.commit()

        # 인기있는 상영작과 관련있는 영화 점수 ++
        choice_movies = {
            1: ['그리고 싶은 것', '첩첩산중', '파킹찬스', '오징어', '치석'],
            2: ['하우스 패밀리', '회오리바람', '졸업', '여고생', '전설의 여공'],
            3: ['한, 숨', '다른, 밤', '돌아가는 관람차', '회전목마', '치석'],
            4: ['위안', '파르티잔', '이장', '대만 이야기', '치석'],
            5: ['대한철강', '낮은 목소리 3 : 숨결', '인류의 영원한 테마', 'In the Cold Cold Night-03_Repeat Mark', '여기, 나의 정원'],
            6: ['스트레인저', '여름의 나무들', '우리는 불스다', '이태원', '초대'],
            7: ['사회생활', '피사체', '그 여자', '지식인 박광만', '담피소'],
            8: ['충심, 소소', '사냥의 밤', '아무도 없는', '신의 아이들은 연기가 어렵다', '파출부'],
            9: ['용산', '물의 기원', '암사자들', '서울연애', '동아'],
            10: ['나를 찾는 전화벨이 울리면', '미필적 고의', '붕붕', '살기 위하여', '공존'],
            11: ['컴, 투게더', '로프공의 밤', '송한나', '하우스 패밀리', '고함'],
            12: ['마트료시카', '지식인 박광만', '무녀도', '얼라이브', '무림일검의 사생활'],
            13: ['탄피', '귀신고래', '착한 사람은 거짓말 하지 않는다', '데스퍼럿 크로싱', '스위밍걸'],
            14: ['물의', '구럼비-바람이 분다', '아프지않아', '물의 기원', '나를 찾는 전화벨이 울리면'],
            15: ['적의 사과', '바다 위의 별', '디어파파', '영화, 관', '대학탐방'],
            16: ['잠시 쉬어가다', '의자가 되는 법', '바느질 하는 여자', '꾸구리', '청춘과부'],
            17: ['악당의 사연', '463 - 포엠 오브 더 로스트', '너는 결코 서둘지 말라', '밥상행사', '갈라파고스'],
            18: ['낮과 밤', '친구집', '파르티잔', '안녕 자지', '대한철강']
        }

        choice_score ={
            1: ['7.7', '7.6', '6.8', '6.2', '5.9'],
            2: ['9.8', '9.8', '8.0', '5.9', '5.6'],
            3: ['4.6', '4.3', '3.9', '3.8', '3.7'],
            4: ['6.6', '6.5', '6.4', '6.0', '5.1'],
            5: ['5.9', '5.3', '5.0', '4.8', '4.8'],
            6: ['17.6', '8.1', '7.4', '6.5', '6.5'],
            7: ['11.4', '8.3', '8.1', '7.4', '6.8'],
            8: ['15.4', '14.5', '10.2', '9.9', '9.9'],
            9: ['7.8', '7.1', '6.9', '6.0', '6.0'],
            10: ['6.1', '6.1', '5.9', '5.7', '5.0'],
            11: ['7.5', '6.9', '6.4', '6.2', '6.2'],
            12: ['8.1', '7.8', '5.9', '5.9', '5.9'],
            13: ['21.6', '9.3', '9.2', '7.7', '6.9'],
            14: ['7.5', '7.3', '7.1', '5.7', '5.1'],
            15: ['7.5', '7.5', '6.1', '5.9', '5.9'],
            16: ['10.0', '8.1', '7.8', '7.5', '7.2'],
            17: ['9.4', '8.3', '8.0', '7.3', '7.3'],
            18: ['9.1', '8.1', '6.4', '6.4', '6.1']
        }
        # 장르 1
        popular_movie1 = Masterpiece.query.filter(Masterpiece.masterpiece_idx == (user_genre1)).first()

    
        print(choice_movies[popular_movie1.masterpiece_idx]) # ['그리고 싶은 것', '첩첩산중', '파킹찬스', '오징어', '치석']

        # 해당하는 타이틀 점수 주기.
        for movie_score in movie_score_push: # 영화목록 가져옴.
            for title_idx, movie in enumerate(choice_movies[popular_movie1.masterpiece_idx]): # ['그리고 싶은 것', '첩첩산중', '파킹찬스', '오징어', '치석']
                if movie == movie_score.movie_title: # 영화 목록 제목과 5개의 데이터가 일치하면
                    # movie_score_push.movie_score += 5
                    for score_idx, score in enumerate(choice_score[popular_movie1.masterpiece_idx]): # [7.7, 7.6, 6.8, 6.2, 5.9]
                        if title_idx == score_idx:
                            print(score, title_idx, score_idx) # 2
                            movie_score.movie_score += float(score)

                            db.session.add(movie_score)
                            db.session.commit()


        # 장르 2
        popular_movie2 = Masterpiece.query.filter(Masterpiece.masterpiece_idx == (user_genre2)).first()

        # 해당하는 타이틀 점수 주기.
        for movie_score in movie_score_push: # 영화목록 가져옴.
            for title_idx, movie in enumerate(choice_movies[popular_movie2.masterpiece_idx]): # ['그리고 싶은 것', '첩첩산중', '파킹찬스', '오징어', '치석']
                if movie == movie_score.movie_title: # 영화 목록 제목과 5개의 데이터가 일치하면
                    # movie_score_push.movie_score += 5
                    for score_idx, score in enumerate(choice_score[popular_movie2.masterpiece_idx]): # [7.7, 7.6, 6.8, 6.2, 5.9]
                        if title_idx == score_idx:
                            print(score, title_idx, score_idx) # 2
                            movie_score.movie_score += float(score)

                            db.session.add(movie_score)
                            db.session.commit()
        
        print(" 가입이 완료되었습니다. ", time.time() - start)
        return jsonify({"result":"success",
                        "content":"가입 성공!",
                        "user_idx": user_idx}, 200)

    return 'sign up page'

@bp.route('/signin', methods=['GET', 'POST'])
def login():
    user = request.get_json()
    
    # fe에서 넘어온 user None인지 확인.
    if user != None:
        user_id = user['email']
        user_pw = user['password']

        # DB에 있는 user_id와 넘어온 user_id 확인.
        same_user = User.query.filter(User.user_id  == user_id).first()
        
        # user가 선택한 장르 주기.
        genre = Score.query.filter(User.user_idx==Score.user_idx).all()
        for gen in genre:
            genre1 = gen.user_score_genre1
            genre2 = gen.user_score_genre2

        if not same_user:
            print('가입되어있지 않은 회원입니다.')

            return jsonify({"result": "fail"})

        elif not check_password_hash(same_user.user_password, user_pw):
            print('비밀번호를 확인해주세요.')

            return {"result": "fail",
                    "content":"비밀번호를 확인해주세요"}, 401
            
        else:
            session.clear()
            # session에 user_idx, user_nick 등록
            session['user'] = same_user.user_idx
            session['nick'] = same_user.user_nick

            print('login 성공')

            return jsonify({
                "result":"success",
                "user_idx": session['user'],
                "user_nick": session['nick'],
                "user_genre1": genre1,
                "user_genre2": genre2,
                "user_runningtime": same_user.user_runningtime,
                "user_region": same_user.user_region
            })

    return 'login page'
            
#로그아웃 logout
@bp.route('/logout')
def logout():
    session.clear()
    return 'home page'

