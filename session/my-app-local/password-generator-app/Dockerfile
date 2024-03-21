# Use an official Node.js runtime as a parent image
FROM node:14-slim

# Example Environment 
ENV ENV="dev"

#Endpoint to show 
ENV LIVE="/live"

# Endpoint to check if the app is ready
ENV HEALTH="/health"

#Endpoint for metrics
ENV METRICS="/metrics"


# Waiting 10 seconds before shutdown the container
ENV GRACEFULL=10000

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Avoid using the root user:
# Use a non-root user
RUN useradd -m myuser
USER myuser

# Map the application port
EXPOSE 3000

# Run the application
CMD ["node", "app.js"]
