FROM node:lts-alpine

WORKDIR /ndoe-nest-starter

COPY package*.json .

RUN npm ci

COPY . .

CMD [ "npm", "run", "start:dev" ]