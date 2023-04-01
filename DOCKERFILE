FROM node:gallium-alpine3.17

RUN apt update && apt install git -y

WORKDIR /server

RUN git pull https://github.com/tapinko/www

RUN npm install

EXPOSE 8081

CMD ["npm", "start"]