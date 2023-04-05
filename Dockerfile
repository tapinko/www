FROM node:16.20.0-bullseye-slim

# RUN apt update && apt install git -y

WORKDIR /server

# RUN git clone https://github.com/tapinko/www

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server"]