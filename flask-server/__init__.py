from flask import Flask, jsonify, request
from flask_cors import CORS
from db_connect import db
from flask_migrate import Migrate
import config

from views import auth,login, main

app = Flask(__name__)

# React와 교차 출처 에러
CORS(app)

# 웹 한글 깨짐 해결.
app.config['JSON_AS_ASCII'] = False

# db 연결
app.config.from_object(config) # config에서 가져온 파일을 사용한다.

# session 사용을 위한 secret_key
app.secret_key = config.SECRET_KEY

# SQLAlchemy 객체를 app과 연결
db.init_app(app)
Migrate().init_app(app, db)

# view Blueprint 등록
app.register_blueprint(auth.bp)
app.register_blueprint(login.bp)
app.register_blueprint(main.bp)

# 없애기 or 변경..?
@app.route('/')
def get_current_time():
    return 'hello, world!'

if __name__ == "__main__":
    app.run(debug=True)

