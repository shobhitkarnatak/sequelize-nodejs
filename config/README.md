# MYSQL RUN IN DOCKER CONTAINER

- docker pull mysql:latest
- docker images
- docker network create mynetwork
- docker run --name some-mysql --network mynetwork -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=database -p        3306:3306 -d mysql:latest
- docker ps
- docker exec -it 8023d53c6040 sh
- mysql -p
# password: root
- show databases;
- create database test;