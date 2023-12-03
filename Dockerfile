FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json .

RUN npm install

COPY ./ .

# Create a directory for logs
RUN mkdir -p /logs

# Set up the volume for logs
VOLUME [ "/logs" ]

EXPOSE 3000

CMD ["npm","start"]
