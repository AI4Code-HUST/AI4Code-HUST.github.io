# Use Node.js v14 as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install Gatsby v3 explicitly
RUN npm install gatsby@^2

# Install other dependencies listed in package.json
RUN npm install

# Install Gatsby CLI globally for development
RUN npm install -g gatsby-cli@^3

# Copy the rest of the application code into the container
COPY . .

# # Expose the Gatsby development server port
# EXPOSE 8000

# Start the Gatsby development server
CMD ["gatsby", "develop"]
