FROM node:16.20.0-bullseye-slim

RUN apt update && apt install git -y

WORKDIR /server

RUN git clone https://github.com/tapinko/www.git

RUN npm install

EXPOSE 3000

CMD ["node", "server"]