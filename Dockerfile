FROM node:12-alpine

# create app directory
WORKDIR /usr/src/app

# install dependencies
COPY package*.json ./

# if you are building your code for production
# RUN npm install --only=production
RUN npm install

# bundle app source
COPY . .

RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]
