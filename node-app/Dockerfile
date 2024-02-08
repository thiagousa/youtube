# Use the official Node.js image as a parent image
FROM --platform=linux/amd64 node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install the dependencies in the container
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Specify the command to run on container start
CMD [ "node", "server.js" ]