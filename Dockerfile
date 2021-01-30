FROM node:lts-alpine

WORKDIR /app

COPY app/package*.json ./
RUN npm install

RUN mkdir src
COPY app/src ./src

CMD [ "npm", "start" ]