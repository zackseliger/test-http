FROM node:14-alpine

# create working directory and copy package.json and package-lock.json
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

# bundle app store
COPY . .

EXPOSE 80

CMD ["node", "index.js"]