from flask import Blueprint, request, url_for, session, redirect, flash
from models.users import *
from werkzeug.security import check_password_hash

bp = Blueprint('login', '__name__', url_prefix='/login')

@bp.route('/', methods=['GET', 'POST'])
def login():

    return 'loginpage'