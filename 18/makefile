# Makefile for Docker Ubuntu Workflow

# Variables
CONTAINER_NAME = ubuntu
BASE_IMAGE = ubuntu:latest
CUSTOM_IMAGE = ubuntu:thiago

.PHONY: all create-container enter-container install-tools download-file commit-image tag-image remove-container run-custom-container clean

all: create-container enter-container

create-container:
	docker run -itd --name=$(CONTAINER_NAME) $(BASE_IMAGE)

enter-container:
	docker exec -it $(CONTAINER_NAME) bash

install-tools:
	docker exec -it $(CONTAINER_NAME) bash -c "apt update && apt install wget -y && apt install htop -y"

download-file:
	docker exec -it $(CONTAINER_NAME) bash -c "wget www.google.com"

view-file:
	docker exec -it $(CONTAINER_NAME) bash -c "cat index.html"

commit-image:
	docker commit $(CONTAINER_NAME)

tag-image:
	docker images
	@echo "Run 'make tag-image IMAGE_ID=<your-image-id>' to tag the image"

tag-image-%:
	docker tag $* $(CUSTOM_IMAGE)

remove-container:
	docker rm $(CONTAINER_NAME) --force

run-custom-container:
	docker run -itd --name=$(CONTAINER_NAME) $(CUSTOM_IMAGE)

clean: remove-container
