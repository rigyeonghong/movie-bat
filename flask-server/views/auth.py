from flask import Blueprint, request, session, flash, redirect, url_for, g
from flask_bcrypt import bcrypt
from db_connect import db

bp = Blueprint("auth", __name__, url_prefix="/auth")
bcrypt = Bcrypt()

#회원가입 signup
@bp.route('/signup', methods=('GET', 'POST'))
def signup():
    #  GET 방식 요청에는 계정 등록하는 탬플릿 뜨고, POST방식 요청에는 DB에 계정 등록하도록
    if request.method == 'GET':
        return 'signup page'
    else:
        user = request.get_json()
        
        user_nick = user['nickname']
        user_id = user['email']
        user_pw = user['password']

        # user 정보가 DB에 이미 있는지 확인
        same_user = User.query.filter(User.user_id == user_id).first()

        # user 정보 없으면 패스워드 암호화 해서 저장
        if not same_user:
            user_pw_hash = bcrypt.generate_password_hash(user_pw)
            new_user = User(user_id = user_id, user_password = user_pw_hash, user_nick = nickname)
            db.session.add(new_user)
            db.session.commit()

            session['user_id'] = user_id
            session['nickname'] = nickname
            return jsonify({"result":"success"})
        else:
            # 사용자 정보가 이미 있다면, 회원가입 페이지로
            return jsonify({"result":"fail"})

            
#로그아웃 logout
@bp.route('/logout')
def logout():
    session.clear()
    return 'home page'

