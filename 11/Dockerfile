#BASE IMAGE
FROM nginx:1.25.4-alpine-slim
# UPDATE AND UPGRADE THE PACKAGE
RUN apk update && apk upgrade
# INSTALL HTOP
RUN apk add htop
# COPY THE NEW INDEX.HTML
COPY files/index.html /usr/share/nginx/html/index.html

# Environment
ENV PRODUCTION=true

# Port Default
# EXPOSE 80

# nginx defaults to this command
# CMD ["nginx", "-g", "daemon off;"]

