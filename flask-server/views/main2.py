from flask import Blueprint, jsonify, request, session
from models.movie import *
import json

bp = Blueprint("main2", __name__, url_prefix="/main2")

@bp.route('/', methods=['GET', 'POST'])
def main():
    
    return "main2 page"