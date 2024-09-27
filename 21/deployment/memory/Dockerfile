# Build stage
# Build stage
FROM golang:1.22-alpine as build

RUN apk add --no-cache git curl

WORKDIR /src

COPY app.go /src

# Build the Go app
RUN go build -o app app.go

# Runtime stage
FROM alpine:latest as runtime

# Copy the app binary from the build stage
COPY --from=build /src/app /app/app

# Command to run the app
CMD [ "/app/app" ]
