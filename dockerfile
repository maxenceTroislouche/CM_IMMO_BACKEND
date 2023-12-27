FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root

COPY ./create_db.sql /docker-entrypoint-initdb.d/
COPY ./data.sql /docker-entrypoint-initdb.d/