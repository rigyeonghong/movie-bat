from flask import Blueprint, request, session, flash, redirect, url_for, g, jsonify
import sys
sys.path.append('../')
from werkzeug.security import generate_password_hash, check_password_hash
from models.users import *
from key.kakao_client import kakao_client_id
import requests

bp = Blueprint("kakao", __name__, url_prefix="/oauth/kakao")

@bp.route('/')
def kakao_sign_in():
    client_id = kakao_client_id
    redirect_uri = "http://www.localhost:5000/oauth/kakao/callback"
    kakao_oauthurl =  f"https://kauth.kakao.com/oauth/authorize?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code"
    # 카카오 로그인 할거면 이리로 가라
    return redirect(kakao_oauthurl)

@bp.route('/callback')
def callback():
    code = request.args["code"]
    client_id = kakao_client_id
    redirect_uri = "http://www.localhost:5000/oauth/kakao/callback"
    kakao_oauthurl =  f"https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={client_id}&redirect_uri={redirect_uri}&code={code}"

    # 토큰서버로 데이터 "전송" -> python 내에서 rest api를 요청해야함
    token_request = requests.get(kakao_oauthurl)
    # 요청에 대해 받을 때의 형식
    token_json = token_request.json()

    # error 발생 시 로그인 페이지로 redirect 
    if "error" in token_json:
        print("에러가 발생했습니다.")
        return {'message':'인증 실패'},404

    # 아닐 시 
    access_token = token_json["access_token"]
    profile_request = requests.get(
        "https://kapi.kakao.com/v2/user/me", headers={"Authorization" : f"Bearer {access_token}"},
    )
    data = profile_request.json()

    print(data)
    kakao_account = data["kakao_account"]
    profile = kakao_account["profile"]
    nickname = profile["nickname"]
    email = kakao_account["email"]
    kakao_id = data["id"]
    profile_img = profile['profile_image_url']


    # nickname이 db에 있는지 확인
    same_nick = User.query.filter(User.user_nick == nickname).first()

    if same_nick:
        return {"result":"failed",
                "content":"이미 존재하는 닉네임입니다."},401

    else:
        # user 정보가 DB에 이미 있는지 확인
        user = User.query.filter(User.user_id == email).first()

        # db에 존재하지 않은 user면 회원가입 진행
        if not user:
            user_id = email
            user_password = kakao_id
            user_nick = nickname
            user_profile = profile_img
        
        user_pw_hash = generate_password_hash(user_password)
        
        session['user'] = email
        session['nick'] = nickname
        session['profile'] = profile_img
        session['pw'] = user_pw_hash

        # kakao로부터 받은 email, nick, profile 넘겨주고
        return jsonify({
            "result":"success",
            "content":"카카오 인증 성공",
            "user_email": session['user'],
            "user_nick": session['nick'],
            "user_profile": session['profile'],
            "user_pw": session['pw']
        })

# 카카오통해 받은 email, nick, profile + user 취향 받아서 db 저장
@bp.route('/user')
def user():
        # fe에서 넘어온 값 확인
        fe_user = request.get_json()
        
        if fe_user != None:
            user_nick = fe_user['nickname']
            user_id = fe_user['email']
            user_genre = fe_user['genre']
            user_runningtime = fe_user['runningtime']
            user_region = fe_user['region']
            user_pw = fe_user['pw']
            user_profile = fe_user['profile']

            # kakao 로는 profile사진은 아직 model에서 init되있지 않기에 안넣음
            new_user = User(user_id,user_pw,user_nick, user_genre, user_runningtime, user_region)
            db.session.add(new_user)
            db.session.commit()

            # db에서 생성된 user_idx 가져오기
            user_saved = User.query.filter(User.user_id == user_id).first()
            user_idx = user_saved.user_idx

            print("회원가입이 완료되었습니다.")
            return jsonify({"result":"success",
                            "content":"가입 성공!",
                            "user_idx": user_idx}, 200)
    
        else:
            return {"result":"failed",
                    "content":"잘못된 요청"}, 401
