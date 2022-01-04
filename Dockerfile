FROM python:3.8-alpine
COPY . /__init__
WORKDIR /__init__
RUN install -r requirements.txt
RUN chmod +x /app/__init__.py
CMD ["python3","__init__.py"]
