# Default target
all: install

# Install helm and kubectl
install:
	brew install helm kubectl

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
	gcloud config set project id-project

gcloud-check-project:
	gcloud config get-value project

cloud-build:
	gcloud builds submit --tag gcr.io/st-hd-pla-platform/password-generator-app:latest my-app-local/password-generator-app

cloud-deploy:
	gcloud run deploy password-generator-app --image gcr.io/st-hd-pla-platform/password-generator-app:latest --platform managed --region us-central1 --allow-unauthenticated --port=3000 	

cloud-delete:
	gcloud run services delete password-generator-app --platform managed --region us-central1
	
.PHONY: all install build run check remove
