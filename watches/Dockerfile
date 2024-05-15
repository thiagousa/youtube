#FROM alpine:latest
FROM alpine:3.18

# COPY sysctl.conf /etc/sysctl.conf
# RUN sysctl -p
RUN echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf


CMD ["sh", "-c", "sleep 3600"]
