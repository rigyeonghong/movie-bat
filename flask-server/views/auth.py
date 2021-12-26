from flask import Blueprint, request, session, flash, redirect, url_for, g
from flask_bcrypt import bcrypt
from db_connect import db
import re

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
        
        nickname = user['nickname']
        user_id = user['email']
        user_pw = user['password']
        user_pw_check = user["passwordcheck"]

        # 이메일 형식 체크 정규식
        regrex = '^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'

        # 아이디 이메일 형식 체크
        valid = re.search(regrex, user_id)
        if not valid:
            flash('이메일 형식으로 입력해주세요.')
            return 'signup page'

        # 비밀번호와 비밀번호 확인값이 같은지 확인
        if user_pw != user_pw_check:
            flash('입력된 비밀번호와 비밀번호 확인값이 일치하지 않습니다.')
            return 'signup page'

        # user 정보가 DB에 이미 있는지 확인
        same_user = User.query.filter(User.user_id == user_id).first()

        # user 정보 없으면 패스워드 암호화 해서 저장
        if not same_user:
            user_pw_hash = bcrypt.generate_password_hash(user_pw)
            new_user = User(user_id = user_id, user_pw = user_pw_hash, nickname = nickname)
            db.session.add(new_user)
            db.session.commit()

            session['user_id'] = user_id
            session['nickname'] = nickname
            flash('회원가입이 완료되었습니다')
            flash(f'즐거운 관람되세요! {nickname}님')
            return 'home page'
        else:
            # 사용자 정보가 이미 있다면, 회원가입 페이지로
            flash('이미 가입된 아이디입니다.')
            return 'signup page'

            
        
