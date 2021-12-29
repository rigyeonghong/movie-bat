from flask import Blueprint, request, session, flash, redirect, url_for, g, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from models.users import *

bp = Blueprint("auth", __name__, url_prefix="/auth")

#회원가입 signup
@bp.route('/signup', methods=['GET', 'POST'])
def signup():

    # fe -> be json데이터 전달 받음.
    user = request.get_json()
    
    if user != None :
        user_nick = user['nickname']
        user_id = user['email']
        user_pw = user['password']
        user_number = user['phoneNum']
        user_genre = user['genre']
        user_runningtime = user['runningtime']
        user_region = user['region']
        

        # user 정보가 DB에 이미 있는지 확인
        same_user = User.query.filter(User.user_id == user_id).first()

        # user 정보 없으면 패스워드 암호화 해서 저장
        if not same_user:
            user_pw_hash = generate_password_hash(user_pw)
            new_user = User(user_id, user_pw_hash, user_nick, user_number, user_genre, user_runningtime, user_region)
            db.session.add(new_user)
            db.session.commit()

            session['user_id'] = user_id
            session['nickname'] = user_nick

            print(" 가입이 완료되었습니다. ")
            return jsonify({"result":"success"})
        else:
            # 사용자 정보가 이미 있다면, 회원가입 페이지로
            print(" 이미 존재하는 사용자입니다. ")
            return jsonify({"result":"fail"})
    return 'signup page'

@bp.route('/signin', methods=['POST', 'GET'])
def login():
    user = request.get_json()
    
    # fe에서 넘어온 user None인지 확인.
    if user != None:
        user_id = user['email']
        user_pw = user['password']

        # DB에 있는 user_id와 넘어온 user_id 확인.
        same_user = User.query.filter(User.user_id  == user_id).first()
        
        if not same_user:
            print('이메일 형식이 아닙니다.')

            return jsonify({"result": "fail"})

        elif not check_password_hash(same_user.user_password, user_pw):
            print('비밀번호를 확인해주세요.')

            return jsonify({"result": "fail"})
            
        else:
            session.clear()
            # session에 user_id, user_nick 등록
            session['user'] = user_id
            session['nick'] = same_user.user_nick
            
            print('login 성공')

            return jsonify({
                "result":"success",
                "user_email": session['user'],
                "user_nick": session['nick']
            })

    return 'login page'
            
#로그아웃 logout
@bp.route('/logout')
def logout():
    session.clear()
    return 'home page'

