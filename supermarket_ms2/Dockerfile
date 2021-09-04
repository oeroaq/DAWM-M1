FROM node:lts-alpine

RUN apk add --no-cache --update python make
WORKDIR /app
ADD package.json .
RUN npm i
ADD . .
USER 1000
CMD sleep 30s && node --max-http-header-size 262144 --nolazy -r ts-node/register -r tsconfig-paths/register src/main.ts