# Build step
FROM node:alpine AS builder

WORKDIR /usr/src/app

## Install dependancies
COPY ./package.json ./
COPY ./pnpm-lock.yml ./
RUN pnpm install --frozen-lockfile

## Copy sources
COPY ./src ./src
COPY ./tsconfig*.json ./
COPY ./nest-cli.json ./

## Build app
RUN nest build

# Runtime step
FROM node:alpine AS runtime

WORKDIR /usr/src/app

## Copy built files from the builder container
COPY --from=builder /usr/src/app/dist /usr/src/app/dist

## Install runtime dependancies
COPY ./package.json ./
COPY ./pnpm-lock.yaml ./
COPY ./nest-cli.json ./
COPY ./tsconfig*.json ./
RUN pnpm install --frozen-lockfile

# Port exposed by the container
EXPOSE 3000

## Start app
CMD ["nest","start"]
