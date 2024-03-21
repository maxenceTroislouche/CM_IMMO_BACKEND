# Get standard postgres image
FROM postgres:16

# Set current user
USER postgres

# ADD [HOST]initdb.sql to [CONTAINER]/docker-entrypoint-initdb.d
# Every script in [CONTAINER]/docker-entrypoint-initdb.d will be executed
# when the container start for the first time
ADD ./initdb.sql /docker-entrypoint-initdb.d/initdb.sql

# Port exposed by the container
EXPOSE 5432