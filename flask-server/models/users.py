from db_connect import db

class User(db.Model):

    __tablename__ = 'user_info_tb'
    
    user_idx = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    # user_id = db.Column(db.String(255), primary_key=True, nullable=False)
    user_id = db.Column(db.String(255), nullable=False)
    user_password = db.Column(db.String(255), nullable=False)
    user_nick = db.Column(db.String(50), nullable=False, unique=True)
    user_number = db.Column(db.String(30), nullable=True)
    user_genre = db.Column(db.String(100), nullable=False)
    user_runningtime = db.Column(db.Integer, nullable=False)
    user_region = db.Column(db.String(50), nullable=True)
    user_profile = db.Column(db.String(255), nullable=True)

    def __init__(self, id, password, nick, phone, genre, runningtime, region):
        self.user_id = id
        self.user_password = password
        self.user_nick = nick
        self.user_number = phone
        self.user_genre = genre
        self.user_runningtime = runningtime
        self.user_region = region