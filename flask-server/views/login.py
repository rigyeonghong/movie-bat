from flask import Blueprint, request, url_for, session, redirect, flash
from models.users import *
from werkzeug.security import check_password_hash

bp = Blueprint('login', '__name__', url_prefix='/login')

@bp.route('/', methods=['POST', 'GET'])
def login():
    user = request.get_json()
    
    if user != None:
        # print(user)
        # print('user["id"] : ', user['email'])
        # print('user["password"] : ', user['password'])
        user_id = user['email']
        user_pw = user['password']

        user = User.query.filter(User.user_id  == user_id).first()

        if not user:
            print('아이디를 확인해주세요.')
            
        # elif not check_password_hash(user.password, user_pw):
            # print('비밀번호를 확인해주세요.')
            
        else:
            session.clear()
            session['user'] = user_id
            # session['nick'] = user.nick
            # print(session['name'])
            print('login 성공')


    return 'login page'