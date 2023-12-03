FROM node:latest

RUN mkdir /app

WORKDIR /app

COPY package.json .

RUN npm install

COPY ./ .

# Create a directory for logs
RUN mkdir /app/logs

# Set up the volume for logs
VOLUME [ "/app/logs" ]

EXPOSE 3000

CMD ["npm","start"]
