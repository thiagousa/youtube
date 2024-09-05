# Define the commands and packages
BREW := /usr/local/bin/brew
HELM := /usr/local/bin/helm
GCLOUD := /usr/local/bin/gcloud
GIT := /usr/bin/git
KUBECTL := /usr/local/bin/kubectl

all: install

install: install_brew install_git install_helm install_gcloud install_kubectl

install_brew:
	@if ! command -v brew >/dev/null 2>&1; then \
		echo "Homebrew not found. Installing..."; \
		/bin/bash -c "$$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"; \
	else \
		echo "Homebrew is already installed."; \
	fi

install_git:
	@if ! command -v git >/dev/null 2>&1; then \
		echo "Git not found. Installing..."; \
		$(BREW) install git; \
	else \
		echo "Git is already installed."; \
	fi

install_helm:
	@if ! command -v helm >/dev/null 2>&1; then \
		echo "Helm not found. Installing..."; \
		$(BREW) install helm; \
	else \
		echo "Helm is already installed."; \
	fi

install_gcloud:
	@if ! command -v gcloud >/dev/null 2>&1; then \
		echo "Google Cloud SDK not found. Installing..."; \
		$(BREW) install --cask google-cloud-sdk; \
	else \
		echo "Google Cloud SDK is already installed."; \
	fi

install_kubectl:
	@if ! command -v kubectl >/dev/null 2>&1; then \
		echo "kubectl not found. Installing..."; \
		$(BREW) install kubectl; \
	else \
		echo "kubectl is already installed."; \
	fi

run-app:
	cd my-app-local/password-generator-app && npm install && npm start

docker-build:
	docker buildx build  --platform linux/amd64 -t thiagousa/password-generator-app:latest my-app-local/password-generator-app

docker-run: 
	docker run -itd -p 3000:3000 --name=password thiagousa/password-generator-app:latest

docker-check:
	docker ps | grep -i password

docker-logs:
	docker logs -f password	 
    
docker-remove: 
	docker rm password --force

docker-push: 
	docker push thiagousa/password-generator-app:latest

docker-pull: 
	docker pull thiagousa/password-generator-app:latest

load-test-install:
	npm install -g artillery

load-test-start:	
	artillery run my-app-local/password-generator-app/loadtest/loadtest.yaml

kubernetes-context:
	kubectl config get-contexts

kubernetes-select:
	kubectl config use-context rancher-desktop 

helm-create:
	helm create my-app-local/password-generator-app-helm

helm-install:
	helm install password-generator-app my-app-local/password-generator-app	

helm-deploy:
	helm template password-generator-app password-generator-app > deployment.yaml

kubernetes-check:
	kubectl get pods

kubernetes-forward:
	kubectl port-forward svc/password-generator-app 3000:3000

gcloud-login:
	gcloud auth login

gcloud-config:
	gcloud config set project st-hd-pla-platform

gcloud-check-project:
	gcloud config get-value project

cloud-build:
	gcloud builds submit --tag gcr.io/st-hd-pla-platform/password-generator-app:latest my-app-local/password-generator-app

cloud-deploy:
	gcloud run deploy password-generator-app --image gcr.io/st-hd-pla-platform/password-generator-app:latest --platform managed --region us-central1 --allow-unauthenticated --port=3000 	

cloud-delete:
	gcloud run services delete password-generator-app --platform managed --region us-central1

.PHONY: all install install_brew install_git install_helm install_gcloud install_kubectl run-app docker-build docker-run docker-check docker-logs docker-remove docker-push docker-pull load-test-install load-test-start kubernetes-context kubernetes-select helm-create helm-install helm-deploy kubernetes-check kubernetes-forward gcloud-login gcloud-config gcloud-check-project cloud-build cloud-deploy cloud-delete
