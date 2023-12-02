FROM node:alpine

WORKDIR /src

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 80

CMD yarn dev
