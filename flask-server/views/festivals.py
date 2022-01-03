from flask import Blueprint, jsonify, request, session
from models.festival import *
import json

bp = Blueprint("festivals", __name__, url_prefix="/festivals")

@bp.route('/<string:region>', methods=['GET'])
def festivals(region):
     
    print(region)

    # 사용자 사는 지역에 맞는 영화제 정보
    festivals = Festival.query.filter(Festival.festival_region == region).all()

    festival_info = []
    for festival in festivals:
        festival_info.append({'festival_title': festival.festival_title, 
                              'festival_link': festival.festival_link,
                              'festival_region' : festival.festival_region})

    festival_infos = dict(list(enumerate(festival_info, start=0)))

    return festival_infos

@bp.route('/', methods=['GET'])
def festival_list():
     
    # 주요 영화제 정보 : 아직 db 순서대로 보냄
    festivals = Festival.query.filter().all()

    festival_info = []
    for festival in festivals:
        festival_info.append({'festival_title': festival.festival_title, 
                              'festival_link': festival.festival_link,
                              'festival_region' : festival.festival_region})

    festival_infos = dict(list(enumerate(festival_info, start=0)))

    return festival_infos
