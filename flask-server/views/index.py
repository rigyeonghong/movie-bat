from flask import Blueprint, request, session, url_for, flash, g

bp = Blueprint("index", __name__, url_prefix="/")

@bp.route('/')
def index():
    return 'hello, dancing13!'

    