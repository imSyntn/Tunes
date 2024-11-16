FROM node:22-alpine

RUN npm i -g nodemon

WORKDIR /Backend

COPY /package*.json .

RUN npm i

COPY . .

CMD [ "npm", "run", "dev" ]