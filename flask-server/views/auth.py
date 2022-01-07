from flask import Blueprint, request, session, flash, redirect, url_for, g, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from models.users import *
from models.score import *
from models.masterpiece import *
from models.movie import *


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

    # fe -> be json데이터 전달 받음.
    user = request.get_json()
    # movie_score = Movie.query.filter().all()

    # genre = '드라마'
    # abc =[]
    # for movies in movie_score:
    #     if type(movies) == list:
    #         for idx, movie in enumerate(movies):
    #             abc.append([movie.movie_idx, movie.movie_genre])
    #     else:
    #         abc.pappend()
    #         # if genre == m.movie_genre:
    #         #     abc.append([movie.movie_idx, movie.movie_genre])
    # print(abc)

    if user != None :
        user_id = user['email']
        user_pw = user['password']
        user_nick = user['nickname']
        user_number = user['phoneNum']
        user_genre1 = user['genre1']
        user_genre2 = user['genre2']
        user_runningtime = user['runningtime']
        user_region = user['region']
        
        
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

        # movie_tb score 주기.
        # 영화 DB에 점수 넣기. +5 + 1
    

        db.session.add(movie_score)
        db.session.commit()

        Masterpiece.query.filter(Masterpiece.idx == user_genre1).first()

        Masterpiece.query.filter(Masterpiece.idx == user_genre2).first()


        print(" 가입이 완료되었습니다. ")
        return jsonify({"result":"success",
                        "content":"가입 성공!",
                        "user_idx": user_idx}, 200)

    return abc

@bp.route('/signin', methods=['GET', 'POST'])
def login():
    user = request.get_json()
    
    # fe에서 넘어온 user None인지 확인.
    if user != None:
        user_id = user['email']
        user_pw = user['password']

        # DB에 있는 user_id와 넘어온 user_id 확인.
        same_user = User.query.filter(User.user_id  == user_id).first()
        
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
                "user_genre": same_user.user_genre,
                "user_runningtime": same_user.user_runningtime,
                "user_region": same_user.user_region
            })

    return 'login page'
            
#로그아웃 logout
@bp.route('/logout')
def logout():
    session.clear()
    return 'home page'

