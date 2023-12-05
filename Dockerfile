FROM node:18

WORKDIR /src

COPY package.json ./

RUN npm install
RUN npm rebuild bcrypt

COPY . .

EXPOSE 80

CMD npm run dev
