# Build stage
FROM node:18-alpine AS builder

# Update Alpine packages to fix security vulnerabilities
RUN apk update && apk upgrade --no-cache

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the project files
COPY . .

# Build the Docusaurus site
RUN npm run build

# Serve stage
FROM nginx:alpine

# Update Alpine packages to fix security vulnerabilities
RUN apk update && apk upgrade --no-cache

# Copy the built files from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 