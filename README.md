To get a running build of this project:

- Download Repo as .zip
- Extract files
- Locate folder in CMD/Terminal
- Make sure node.js and npm are installed
- Run npm install
- Run npm build
- Point web hosting server to /build folder

If using Docker, we must create an image of the project before running it
NOTE: This docker file in the project uses nginx
OPTIONAL: To host this on a personal server, it's good practice to segment docker containers into their own IP addresses and then port forwarding them accordingly, to do this you must create a network in docker (IPVLAN, MACVLAN, etc.) and then assign the network to the container in the run command.

- Make sure docker is installed
- docker build -t personal-portfolio:nginx -f Dockerfile .
- docker run -p 8081:80 personal-portfolio:nginx

IF USING CUSTOM NETWORK CONFIG:
- docker run -itd --network NETWORK_NAME -p 8081:80 --name CONTAINER_NAME personal-portfolio:nginx
