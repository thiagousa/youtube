# Define variables
DOCKER_IMAGE = ansible/ansible:default
PLAYBOOK = install-glace.yml
PLAYBOOK-fix = fix-ssh-password.yaml
INVENTORY = inventory.ini
SSH_KEY = /Users/tsantos/.ssh/
# Build the custom Docker image
build-ansible-image:
	docker build -t $(DOCKER_IMAGE) -f Dockerfile .

# Run Ansible playbook in Docker
ansible-run: build-ansible-image
	docker run --rm -it \
		-v .:/ansible \
		-v $(SSH_KEY):/home/tsantos/.ssh/ \
		-w /ansible \
		$(DOCKER_IMAGE) \
		ansible-playbook $(PLAYBOOK) -i $(INVENTORY) -e "ansible_python_interpreter=/usr/bin/python3.12"

ansible-fix-ssh-password: build-ansible-image

	docker run --rm -it \
		-v .:/ansible \
		-v /Users/tsantos/.ssh/:/home/tsantos/.ssh/ \
		-w /ansible \
		--user=1000:1000 \
		-e ANSIBLE_HOST_KEY_CHECKING=False \
		ansible/ansible:default \
		ansible-playbook $(PLAYBOOK-fix) -i inventory.ini -e "ansible_python_interpreter=/usr/bin/python3.12"

ansible-run-with-password: build-ansible-image
	docker run --rm -it \
		-v .:/ansible \
		-e ANSIBLE_HOST_KEY_CHECKING=False \
		-w /ansible \
		$(DOCKER_IMAGE) \
		ansible-playbook $(PLAYBOOK) -i $(INVENTORY) -e "ansible_python_interpreter=/usr/bin/python3.12" -vvv