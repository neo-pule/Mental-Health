FROM node:14.4-alpine3.11

# Create app directory, this is in our container/in our image
WORKDIR /frontend

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY package*.json ./


# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY  package.json /frontend
COPY  package-lock.json /frontend

RUN npm install

COPY . .
RUN npm run start-pwa

EXPOSE 8080
CMD [ "start-pwa", "dist/frontend" ]
