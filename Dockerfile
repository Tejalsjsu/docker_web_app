FROM node:8

#create app director
#this is working directory of the application
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY /package*.json /app/

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . /app

EXPOSE 3000
CMD [ "npm", "start" ]


