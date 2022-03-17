FROM node:14.4-alpine3.11

# Create app directory, this is in our container/in our image
WORKDIR /server

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY package*.json ./


# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY  package.json /server
COPY  package-lock.json /server

RUN npm install

COPY . .
RUN npm run start:dev

EXPOSE 3000
CMD [ "start:dev", "dist/main" ]
