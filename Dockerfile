FROM python:3.9

COPY flask-server /app

EXPOSE 5000

WORKDIR /app

RUN pip install -r requirements.txt

RUN chmod +x /app/__init__.py

CMD ["python3", "__init__.py"]


