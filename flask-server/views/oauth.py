from flask import Blueprint, request, session, flash, redirect, url_for, g, jsonify
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
    redirect_uri = "http://www.localhost:3333/oauth/kakao/callback"
    kakao_oauthurl =  f"https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={client_id}&redirect_uri={redirect_uri}&code={code}"

    # 토큰서버로 데이터 "전송" -> python 내에서 rest api를 요청해야함
    token_request = requests.get(kakao_oauthurl)
    # 요청에 대해 받을 때의 형식
    token_json = token_request.json()

    # error 발생 시
    if "error" in token_json:
        print("에러가 발생했습니다.")
        return login_page

    # 아닐 시 
    access_token = token_json["access_token"]
    profile_request = requests.get(
        "https://kapi.kakao.com/v2/user/me", headers={"Authorization" : f"Bearer {access_token}"},
    )
    data = profile_request.json()

    kakao_account = data["kakao_account"]
    profile = kakao_account["profile"]
    nickname = profile["nickname"]
    email = kakao_account["email"]
    kakao_id = data["id"]

    user = User.query.filter_by(id=email).first()

    if not user:
        user_id = email
        user_password = kakao_id
        user_nick = nickname

        new_user = User(user_id,user_password,user_nick)
        db.session.add(new_user)
        db.session.commit()
        print("회원가입이 완료되었습니다.")
    
    session['user'] = email
    session['nick'] = nickname

    return main_page
