 # Makefile for Kubernetes operations

# Clone repository and change directory
clone:
	git clone git@github.com:thiagousa/youtube.git
	cd youtube/20/

# Create a Kind cluster
create-cluster:
	kind create cluster --name pod --config kind/kind-config.yaml

# Create a pod
create-pod:
	kubectl run test --image=nginx:latest

# List pods
list-pods:
	kubectl get pod -o wide

# Apply pod configuration
apply-pod-config:
	kubectl apply -f pod.yaml

# Execute into the pod
exec-pod:
	kubectl exec -it nginx -- bash

# Check NGINX configuration
check-nginx:
	kubectl exec -it nginx -- nginx -t

# Delete the pod
delete-pod:
	kubectl delete -f pod.yaml
	kubectl delete pod test --force

# Delete the Kind cluster
delete-all:
	kind delete cluster --name pod


.PHONY: clone create-cluster create-pod list-pods apply-pod-config exec-pod check-nginx delete-pod delete-all