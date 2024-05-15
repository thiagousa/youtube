FROM alpine:latest

COPY sysctl.conf /etc/sysctl.conf
RUN sysctl -p

CMD ["sh", "-c", "sleep 3600"]
