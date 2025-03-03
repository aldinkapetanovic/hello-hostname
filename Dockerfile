# Use official Node.js image based on Alpine Linux
FROM node:alpine

# Set the timezone you want to use (modify as needed)
ENV TZ=Europe/Sarajevo

# Install tzdata, set the timezone, and then remove tzdata to keep the image lean
# RUN apk add --no-cache tzdata && \
#     cp /usr/share/zoneinfo/$TZ /etc/localtime && \
#     echo $TZ > /etc/timezone && \
#     apk del tzdata

ARG SHORT_SHA
ENV SHORT_SHA=$SHORT_SHA

RUN apk add tzdata
RUN ln -s /usr/share/zoneinfo/Europe/Sarajevo /etc/localtime

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

RUN npm install --ignore-scripts

# Copy the rest of the application code
COPY . .

# Expose the desired port (adjust according to your app)
EXPOSE 3000

USER node

# Start the application (modify the command as needed)
CMD ["npm", "start"]