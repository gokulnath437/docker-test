# Use an official nginx runtime as a parent image
FROM nginx:alpine

# Copy static HTML content to be served
COPY index.html /usr/share/nginx/html/index.html

# Copy nginx configuration file
#COPY nginx.conf /etc/nginx/nginx.conf


# Expose port 80
EXPOSE 80

# Define the command to start nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
