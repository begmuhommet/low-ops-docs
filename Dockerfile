# Use an official Python runtime as a parent image
FROM python:3.8-slim as builder

# Set the working directory to /app
WORKDIR /app

COPY requirements.txt ./
# Install MkDocs and the Material theme
RUN pip install -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . ./

# Build the MkDocs project
RUN mkdocs build

FROM nginx:alpine

# Set the working directory to /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Copy the MkDocs static files into the container
COPY --from=builder /app/site/ .

COPY LICENSE .
COPY EULA .
# Expose port 80 for serving the MkDocs site
EXPOSE 80

# Command to start Nginx and serve the MkDocs site
CMD ["nginx", "-g", "daemon off;"]