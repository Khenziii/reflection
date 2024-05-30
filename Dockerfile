FROM python:3.11-alpine AS base

WORKDIR /app

COPY . . 

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 3000 

CMD ["pyton3", "app.py"]

