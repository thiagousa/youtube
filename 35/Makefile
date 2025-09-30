# Makefile for Kubernetes operations

# Create a Kind cluster using a specified config file
create-cluster:
	kind create cluster --name resources --config kind/kind-config.yaml
z9o0i0cifiopefju odj ifjri fuiug0digfhuigo8j9sgzr9it9r4it4eri90ti,,t90utiru8tiur8tu9eeuf90ru0t9rue990r89tur89tuirtu r89tu8r9wtu8r9ut89r ut98 ryutg985yut8rut89ryrt89ut9ru9ru8i9ttut8ur89tuir c.
# Create a pod YAML file for an NGINX deployment (client-side dry run)
helm-create:elm create nginx

create-deploy:
	kubectl create deployment nginx --image=nginx:latest --port=80 --dry-run=client -o yaml > nginx/templates/deployment.yaml

create-service:
	kubectl create service clusterip nginx --tcp=80:80 --dry-run=client -o yaml > nginx/templates/service.yaml
check-helm:
	helm template nginx nginx -f nginx/values.yaml 

install-helm:
	helm install nginx nginx -f nginx/values.yaml