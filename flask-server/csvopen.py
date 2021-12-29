import csv
import sqlite3

con = sqlite3.connect('Movie.db')
cur = con.cursor()

with open('./static/sample.csv', encoding='UTF-8') as file:
    reader = csv.DictReader(file, delimiter=',')
    result = [ (w['year'], w['film festival'], w['title'], w['director'], w['field'], w['img_link'], w['genre']) for w in reader]

cur.executemany("INSERT INTO movie_tb(movie_year, movie_film_festival, movie_title, movie_director, movie_filed, movie_img_link, movie_genre) VALUES (?, ?, ?, ?, ?, ?, ?)", result)

con.commit()
con.close()
