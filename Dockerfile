FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm install --ignore-scripts

COPY index.js .

EXPOSE 3000

USER node

CMD ["npm","start"]

