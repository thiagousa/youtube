# Makefile for Kubernetes operations

# Create a Kind cluster using a specified config file
create-cluster:
	kind create cluster --name configmap --config kind/kind-config.yaml

create-configmap-literal:
	 kubectl create configmap literal --from-literal=env=ConfigMap 

create-configmap-file:
	 kubectl create configmap file --from-file=config.json

create-configmap:
	 kubectl create configmap password --from-literal=env=ConfigMap --from-file=config.json --dry-run=client -o yaml > config-map-literal-file.yaml

apply-configmap:
	kubectl apply -f config-map-literal-file.yaml

list-configmap:
	kubectl get configmap

show-configmap:
	kubectl get configmap password -o yaml

apply-pod:
	kubectl apply -f pod.yaml

list-pods:
	kubectl get pod -o wide

show-pod-env:
	kubectl exec -it password-generator-app -- env | grep -i ENV

show-pod-file:
	kubectl exec -it password-generator-app -- sh -c "ls -lha /config/config.json && cat /config/config.json"

# Delete the Kind cluster named "resources"
delete-all:
	kind delete cluster --name configmap

# Specify phony targets that are not actual files
.PHONY: 