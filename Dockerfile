FROM node:8

WORKDIR /app

COPY ./dist /app

RUN npm i

CMD [ "node", "index.js" ]
