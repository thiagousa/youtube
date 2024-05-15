# Define default make command
default: build

# Create a Kind cluster with 1 control plane and 2 worker nodes
build:
	docker build . -t app:latest
run:
	docker run -itd --name=app app:latest

exec:
	docker exec -it app sh

delete:
	docker rm app --force

check:
	docker exec -it app sysctl fs.inotify.max_user_watches

logs:
	docker logs app

.PHONY: default build run exec delete check logs