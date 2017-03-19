FROM node:6.9-alpine

RUN mkdir app

COPY . /app
RUN cd /app && \
    npm i

WORKDIR /app

EXPOSE 3000
