docker-hello-hostname

npm install

npm start

curl http://localhost:3000

docker build -t hello-hostname .

docker images -a

docker run -d -p 3000:3000 --name hello-hostname hello-hostname

docker ps -a

docker logs hello-hostname

docker stop hello-hostname

docker start hello-hostname

docker rm hello-hostname

