FROM node:22-alpine

WORKDIR /Frontend

COPY /package*.json .

RUN npm i

COPY . .

EXPOSE 5173:5173

CMD [ "npm", "run", "dev" ]