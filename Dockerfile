# Use official Node.js image as a base
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock first for better caching
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the app’s source code
COPY . .

# Expose the port React app runs on
EXPOSE 5173

# Set the default command to run the app
CMD ["yarn", "dev"]
