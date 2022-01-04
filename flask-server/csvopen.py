import csv
import sqlite3

con = sqlite3.connect('Movie.db')
cur = con.cursor()

# with open('./static/sample.csv', encoding='UTF-8') as file:
#     reader = csv.DictReader(file, delimiter=',')
#     # result = [ (w['year'], w['film festival'], w['title'], w['director'], w['field'], w['img_link'], w['genre']) for w in reader]
    
# cur.executemany("INSERT INTO movie_tb(movie_year, movie_film_festival, movie_title, movie_director, movie_filed, movie_img_link, movie_genre) VALUES (?, ?, ?, ?, ?, ?, ?)", result)

# with open('./static/film_festival.csv', encoding='UTF-8') as file:
    # reader = csv.DictReader(file, delimiter=',')
    # result = [ (w['year'], w['film_festival'], w['title'], w['director'], w['field'], w['award'], w['genre'], w['plot'], w['rating'], w['runtime'], w['prodYear'], w['actors'], w['img_link'], w['stills']) for w in reader]
    
# cur.executemany("INSERT INTO movie_tb(movie_year, movie_prodYear, movie_film_festival, movie_filed, movie_award, movie_title, movie_director, movie_actors, movie_genre, movie_rating, movie_runtime, movie_plot, movie_img_link, movie_stills) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", result)
# cur.executemany("INSERT INTO movie_tb(movie_year, movie_film_festival, movie_title, movie_director, movie_field, movie_award, movie_genre, movie_plot, movie_rating, movie_runtime, movie_prodYear, movie_actors, movie_img_link, movie_stills) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", result)

with open('./static/festival.csv', encoding='UTF-8') as file:
    reader = csv.DictReader(file, delimiter=',')
    result = [(w['title'], w['link'], w['img_src'], w['region'], w['latlng'], w['latitude']) for w in reader]

cur.executemany("INSERT INTO festival_tb(festival_title, festival_link, festival_region, festival_src, festival_latlng, festival_latitude) VALUES (?, ?, ?, ?, ?, ?)", result)

con.commit()
con.close()
