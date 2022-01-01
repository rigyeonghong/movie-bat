from db_connect import db

class Movie(db.Model):

    __tablename__ = 'movie_tb'

    movie_idx = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    movie_year = db.Column(db.String(30))
    movie_film_festival = db.Column(db.String(50))
    movie_title = db.Column(db.String(100))
    movie_director = db.Column(db.String(30))
    movie_filed = db.Column(db.String(100))
    movie_img_link = db.Column(db.String(200))
    movie_genre = db.Column(db.String(30))


# from db_connect import db

# class Movie(db.Model):

#     __tablename__ = 'movie_tb'

#     movie_idx = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
#     movie_year = db.Column(db.String(30))
#     movie_film_festival = db.Column(db.String(50))
#     movie_title = db.Column(db.String(100))
#     movie_director = db.Column(db.String(30))
#     movie_filed = db.Column(db.String(100))
#     movie_award = db.Column(db.String(30))
#     movie_genre = db.Column(db.String(30))
#     movie_img_link = db.Column(db.String(200))
#     movie_rating = db.Column(db.String(30))
#     movie_runtime = db.Column(db.String(30))
#     movie_prodYear = db.Column(db.String(30))
#     movie_actors = db.Column(db.String(50))
#     movie_plot = db.Column(db.String(1000))
#     movie_stills = db.Column(db.String(1000))
