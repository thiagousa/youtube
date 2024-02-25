FROM nginx:1.25.4-alpine-slim

RUN apt update

RUN apt install htop -y

COPY index.html /usr/share/nginx/html/index.html

# Environment
# ENV PRODUCTION=true

# Port Default
# EXPOSE 80

# nginx defaults to this command
# CMD ["nginx", "-g", "daemon off;"]

