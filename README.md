# docker_web_app

Steps to runn App
1. Download or clone the repositoty
2. npm install
3. run node server.js
4. Access using localhost:8080


Creating Docker image:
1. Install docker for you OS type
2. The Dockerfile is already created. Build the docker image using this file
3. Command to build image:
    $ docker build -t docker_web_app .
    
4. Run docker image:
    $ docker run -p 3000:8080 -d docker_web_app
    
Note: If you are using Docker toolkit on window 10 home you will need to access the webpage through docker-machine ip command. It is generally 192.168.99.100:3000
