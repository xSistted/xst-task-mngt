# Use a compatible Node.js version for Vite
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json
COPY package.json ./

# Install dependencies
RUN npm install -g bun && bun install

# Copy the .env file
COPY .env ./.env

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Command to run the application
CMD ["bun", "run", "dev"]