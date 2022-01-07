from db_connect import db

class Masterpiece(db.Model):

    __tablename__ = 'masterpiece_tb'

    masterpiece_title = db.Column(db.String(100), primary_key=True, nullable=False)
    masterpiece_director = db.Column(db.String(30))
    masterpiece_genre = db.Column(db.String(30))
    masterpiece_plot = db.Column(db.String(1000))
    masterpiece_img_link = db.Column(db.String(200))
