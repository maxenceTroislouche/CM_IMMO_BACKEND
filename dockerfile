FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root

COPY ./initdb/create_db.sql /docker-entrypoint-initdb.d/
COPY ./initdb/data.sql /docker-entrypoint-initdb.d/