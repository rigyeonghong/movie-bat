from db_connect import db

class users(db.Model):

    __tablename__ = 'user_info_tb'

    user_id = db.Column(db.String(255), primary_key=True, nullable=False)
    user_password = db.Column(db.String(255), nullable=False)
    user_name = db.Column(db.String(30), nullable=False)
    user_nik = db.Column(db.String(50), nullable=False)
    user_number = db.Column(db.String(30), nullable=False)

    def __init__(self, id, password, name, nik, phone):
        self.user_id = id
        self.user_password = password
        self.user_name = name
        self.user_nik = nik
        self.user_number = phone
