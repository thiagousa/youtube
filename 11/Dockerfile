FROM nginx:1.25.4-alpine-slim

RUN apk update && apk upgrade

RUN apk add htop

COPY files/index.html /usr/share/nginx/html/index.html

# Environment
# ENV PRODUCTION=true

# Port Default
# EXPOSE 80

# nginx defaults to this command
# CMD ["nginx", "-g", "daemon off;"]

