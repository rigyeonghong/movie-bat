from flask import Blueprint, request, url_for, session, redirect, flash, jsonify
from models.users import *
from flask_bcrypt import bcrypt
from werkzeug.security import check_password_hash


bp = Blueprint('login', '__name__', url_prefix='/login')
# bcrypt = Bcrypt()

@bp.route('/', methods=['POST', 'GET'])
def login():
    user = request.get_json()
    
    # fe에서 넘어온 user None인지 확인.
    if user != None:
        # print(user)
        # print('user["id"] : ', user['email'])
        # print('user["password"] : ', user['password'])
        user_id = user['email']
        user_pw = user['password']

        # DB에 있는 user_id와 넘어온 user_id 확인.
        same_user = User.query.filter(User.user_id  == user_id).first()
        
        if not same_user:
            print('아이디를 확인해주세요.')

            return jsonify({"result": "fail"})
        elif not check_password_hash(same_user.user_password, user_pw):
        # elif not bcrypt.check_password_hash(user_pw):
            print('비밀번호를 확인해주세요.')

            return jsonify({"result": "fail"})
            
        else:
            session.clear()
            # session에 user_id, user_nick 등록
            session['user'] = user_id
            session['nick'] = same_user.user_nick
            
            print('login 성공')

            return jsonify({"result":"success"})


    return 'login page'
