<<<<<<< HEAD
FROM python:3
COPY . /__init__
WORKDIR /__init__
RUN pip install -r requirements.txt
RUN chmod +x /__init__/__init__.py
CMD ["python3", "__init__.py"]


=======
FROM ubuntu
RUN apt-get update -y && \
    apt-get install -y python3-pip python-dev

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip3 install -r requirements.txt

COPY . /app

ENTRYPOINT [ "python" ]

CMD ["__init__.py"]
>>>>>>> master
