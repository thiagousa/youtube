# Makefile for Kubernetes operations

# Target to create a Kind cluster using a specified configuration file
create-cluster:
	kind create cluster --name configmap --config kind/kind-config.yaml

# Target to create a ConfigMap using a literal value
create-configmap-literal:
	kubectl create configmap literal --from-literal=env=ConfigMap 

# Target to create a ConfigMap from a specified file
create-configmap-file:
	kubectl create configmap file --from-file=config.json

# Target to create a ConfigMap with both a literal and a file, and output the YAML to a file
create-configmap:
	kubectl create configmap password --from-literal=env=ConfigMap --from-file=config.json --dry-run=client -o yaml > config-map-literal-file.yaml

# Target to apply the created ConfigMap to the cluster
apply-configmap:
	kubectl apply -f config-map-literal-file.yaml

# Target to list all ConfigMaps in the current namespace
list-configmap:
	kubectl get configmap

# Target to show detailed information about a specific ConfigMap
show-configmap:
	kubectl get configmap password -o yaml

# Target to apply a Pod definition from a YAML file
apply-pod:
	kubectl apply -f pod.yaml

# Target to list all Pods in the current namespace with additional information
list-pods:
	kubectl get pod -o wide

# Target to show environment variables of the specified Pod
show-pod-env:
	kubectl exec -it password-generator-app -- env | grep -i ENV

# Target to list and show the contents of a specific file within the Pod
show-pod-file:
	kubectl exec -it password-generator-app -- sh -c "ls -lha /config/config.json && cat /config/config.json"

# Target to delete the Kind cluster named "configmap"
delete-all:
	kind delete cluster --name configmap

# Specify phony targets that are not actual files
.PHONY: create-cluster create-configmap-literal create-configmap-file create-configmap \
	apply-configmap list-configmap show-configmap apply-pod list-pods show-pod-env show-pod-file delete-all
