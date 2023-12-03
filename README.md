docker-hello-hostname

npm install

npm start

curl http://localhost:3000

docker build -t hello-hostname .

docker images -a

docker run -d -p 3000:3000 --name hello-hostname hello-hostname

docker run --name hello-hostname -v /tmp/hello-hostname/logs:/app/logs -p 3000:3000 hello-hostname



docker ps -a

docker logs hello-hostname

docker stop hello-hostname

docker start hello-hostname

docker rm hello-hostname

docker pull ghcr.io/aldinkapetanovic/hello-hostname:latest

https://github.com/aldinkapetanovic/hello-hostname/pkgs/container/hello-hostname
