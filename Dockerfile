FROM node:6.10-alpine
MAINTAINER Mohammad Faisal <faisalhmohd@gmail.com>

RUN mkdir app

COPY . /app
RUN cd /app && \
    yarn global add pm2 && \
    yarn install

WORKDIR /app

EXPOSE 3000
