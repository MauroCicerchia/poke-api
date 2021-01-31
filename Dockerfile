FROM node:8

WORKDIR /app

COPY ./dist /app

RUN npm i --only=prod

CMD [ "node", "index.js" ]
