from db_connect import db
from datetime import datetime
from datetime import timedelta

class Review(db.Model):

    __tablename__ = 'review_tb'

    review_idx = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    movie_idx = db.Column(db.Integer, db.ForeignKey("movie_tb.movie_idx"), nullable=False)
    user_idx = db.Column(db.Integer, db.ForeignKey("user_info_tb.user_idx"), nullable=False)
    review_content = db.Column(db.Text, nullable=False)
    review_rating = db.Column(db.Integer, nullable=False)
    review_date = db.Column(db.Datetime, nullable=False, default=datetime.utcnow() + timedelta(hours=9))

    def __init__(self, movie_idx, user_idx, content, rating, date):
        self.movie_idx = movie_idx
        self.user_idx = user_idx
        self.review_content = content
        self.review_rating = rating
        self.review_date = date
