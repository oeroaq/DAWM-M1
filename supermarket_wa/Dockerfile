FROM node:carbon-slim

# Create app directory
WORKDIR /supermarket_wa

# Install app dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .

CMD npm run start
