from db_connect import db

class Score(db.Model):

    __tablename__ = 'user_score_tb'

    user_score_idx = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    # movie_idx = db.Column(db.Integer, db.ForeignKey("movie_tb.movie_idx"), nullable=False)
    user_idx = db.Column(db.Integer, db.ForeignKey("user_info_tb.user_idx"), nullable=False)
    user_score_genre1 = db.Column(db.String(10))
    user_score_genre2 = db.Column(db.String(10))

    def __init__(self, user, genre1, genre2):
        # self.movie_idx = movie
        self.user_idx = user
        self.genre1 = genre1
        self.genre2 = genre2

    # user_score_comedy = db.Column(db.String(50), default = 0)
    # user_score_fantasy  = db.Column(db.String(50), default = 0)
    # user_score_drama = db.Column(db.String(50), default = 0)
    # user_score_family = db.Column(db.String(50), default = 0)
    # user_score_mello = db.Column(db.String(50), default = 0)
    # user_score_social = db.Column(db.String(50), default = 0)
    # user_score_thriller = db.Column(db.String(50), default = 0)
    # user_score_exp = db.Column(db.String(50), default = 0)
    # user_score_horror = db.Column(db.String(50), default = 0)
    # user_score_human = db.Column(db.String(50), default = 0)
    # user_score_action = db.Column(db.String(50), default = 0)
    # user_score_sf = db.Column(db.String(50), default = 0)
    # user_score_history = db.Column(db.String(50), default = 0)
    # user_score_music = db.Column(db.String(50), default = 0)
    # user_score_homo = db.Column(db.String(50), default = 0)
    # user_score_adventure = db.Column(db.String(50), default = 0)
    # user_score_nature = db.Column(db.String(50), default = 0)

