FROM python:3

ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
ARG URL=0.0.0.0:4000

CMD sleep 30s && python manage.py makemigrations supermarket_ms && python manage.py migrate && python manage.py runserver $URL