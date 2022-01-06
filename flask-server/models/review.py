from db_connect import db


class Review(db.Model):

    __tablename__ = 'review_tb'

    review_idx = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    movie_idx = db.Column(db.Integer, db.ForeignKey("movie_tb.movie_idx"), nullable=False)
    user_idx = db.Column(db.Integer, db.ForeignKey("user_info_tb.user_idx"), nullable=False)
    review_content = db.Column(db.Text, nullable=False)
    review_rating = db.Column(db.Integer, default = 0)
    review_date = db.Column(db.DateTime)
    review_delete_date = db.Column(db.DateTime)
    is_deleted = db.Column(db.Integer, default = 0)


    def __init__(self, movie_idx, user_idx, content, date):
        self.movie_idx = movie_idx
        self.user_idx = user_idx
        self.review_content = content
        self.review_date = date

