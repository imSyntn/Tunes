FROM node:22-alpine

WORKDIR /Backend

COPY /package*.json .

RUN npm i

COPY . .

CMD [ "npm", "start" ]