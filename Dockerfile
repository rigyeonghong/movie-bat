FROM python:3.8-alpine
COPY . /__init__
WORKDIR /__init__
RUN pip3 install -r /flask-server/requirements.txt
RUN chmod +x /__init__/__init__.py
CMD ["python3", "__init__.py"]

