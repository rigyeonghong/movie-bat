from db_connect import db

class Festival(db.Model):

    __tablename__ = 'festival_tb'

    festival_title = db.Column(db.String(50), primary_key=True, nullable=False)
    festival_link = db.Column(db.String(200))
    festival_region = db.Column(db.String(50))
    festival_src = db.Column(db.String(100))
