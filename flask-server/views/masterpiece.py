from flask import Blueprint, jsonify, request, session
from models.masterpiece import *
import json

bp = Blueprint("masterpiece", __name__, url_prefix="/masterpiece")

@bp.route('/', methods=['GET'])
def masterpiece():
    
    # masterpiece tb에서 모두 가져온다
    masterpiece = Masterpiece.query.filter().all()

    masterpieces = []
    for m in masterpiece:
        masterpieces.append({
            'masterpiece_title' : m.masterpiece_title , 
            "masterpiece_director" : m.masterpiece_director, 
            "masterpiece_genre" : m.masterpiece_genre, 
            "masterpiece_plot" : m.masterpiece_plot,
            "masterpiece_img_link" : m.masterpiece_img_link
        })

    select_masterpiece = dict(list(enumerate(masterpieces, start=0)))

    return select_masterpiece