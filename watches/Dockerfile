#FROM alpine:latest
FROM node:22-alpine3.19

COPY sysctl.conf /etc/sysctl.conf
RUN sysctl -p

CMD ["sh", "-c", "sleep 3600"]
