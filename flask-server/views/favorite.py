from flask import Blueprint, jsonify, request, session
from models.favorite import *
from models.movie import *

bp = Blueprint("favorite", __name__, url_prefix="/favorite")

@bp.route('/', methods=['GET', 'POST'])
def wishlist():
    # fe -> be로 데이터 받아옴.
    wish = request.get_json()

    # 받아온 데이터가 존재하면
    if wish != None:
        movie_idx = wish['movie_idx']
        user_id = wish['user_id']
        favorite_data = wish['date']

        same_wish = Favorite.query.filter((Favorite.movie_idx == movie_idx) & (Favorite.user_id == user_id)).first()

        # 이미 추가한 찜이 아니면
        if not same_wish:
            print('찜이 완료되었습니다.')
            favorite_data = Favorite(movie_idx, user_id, favorite_data)

            db.session.add(favorite_data)
            db.session.commit()

            return jsonify({"result":"success"}), 200

        # 추가되어 있으면 (삭제?)
        else:
            print("이미 찜리스트에 있습니다.")
            return({
                "result": "failed",
                "content": "이미 찜목록에 존재합니다."
            }), 200

    user_id = session['user_id']
    print(user_id)
    # user_idx = 1
    
    # db에서 찜 데이터 가져옴.
    wish_list = db.session.query(Movie.movie_idx, Movie.movie_img_link, Movie.movie_title, Favorite.favorite_idx, Favorite.movie_idx, Favorite.user_id, Favorite.favorite_date).filter(Movie.movie_idx == Favorite.movie_idx, Favorite.user_id == user_id).order_by(Favorite.favorite_date)
    
    wish_data = []
    for wish in wish_list:
        wish_data.append({
            'wish_idx': wish.favorite_idx,
            'movie_idx': wish.movie_idx,
            'movie_title': wish.movie_title,
            'movie_img_link': wish.movie_img_link,
            'user_id': wish.user_id,
            'favorite_date': wish.favorite_date
        })

    # 찜목록 dict형식으로 만들어줌.
    wish_datas = dict(list(enumerate(wish_data)))
    print(wish_datas)

    return jsonify(wish_datas)
