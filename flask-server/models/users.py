from db_connect import db

class User(db.Model):

    __tablename__ = 'user_info_tb'

    user_id = db.Column(db.String(255), primary_key=True, nullable=False)
    user_password = db.Column(db.String(255), nullable=False)
    # user_name = db.Column(db.String(30), nullable=False)
    user_nick = db.Column(db.String(50), nullable=False)
    user_number = db.Column(db.String(30), nullable=True)

    def __init__(self, id, password, nick, phone):
        self.user_id = id
        self.user_password = password
        self.user_nick = nick
        self.user_number = phone
