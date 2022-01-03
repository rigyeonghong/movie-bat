from flask import Blueprint, jsonify, request, session
from models.favorite import *
from models.movie import *

bp = Blueprint("wishlist", __name__, url_prefix="/wishlist")

@bp.route('/', methods=['GET', 'POST'])
def wishlist():

    user_idx = session['user_idx']
    print(user_idx)
    # user_idx = 1

    wish_list = db.session.query(Movie.movie_idx, Movie.movie_img_link, Movie.movie_title, Favorite.favorite_idx, Favorite.movie_idx, Favorite.user_idx, Favorite.favorite_date).filter(Movie.movie_idx == Favorite.movie_idx, Favorite.user_idx == user_idx).order_by(Favorite.favorite_date)
    wish_data = []
    for wish in wish_list:
        wish_data.append({
            'wish_idx': wish.favorite_idx,
            'movie_idx': wish.movie_idx,
            'movie_title': wish.movie_title,
            'movie_img_link': wish.movie_img_link,
            'user_idx': wish.user_idx,
            'favorite_date': wish.favorite_date
        })

    wish_datas = dict(list(enumerate(wish_data)))
    print(wish_datas)

    return jsonify(wish_datas)
