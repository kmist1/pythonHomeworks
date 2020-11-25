FROM python:3.8

WORKDIR /serverTest

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY app/ .

CMD [ "python","./app1.py" ]

