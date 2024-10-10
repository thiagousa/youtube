# Makefile for Kubernetes operations

# Create a Kind cluster using a specified configuration file
create-cluster:
	kind create cluster --name secret --config kind/kind-config.yaml

# Create a secret using a literal value
create-secret-literal:
	kubectl create secret generic literal --from-literal=password=password 

# Create a secret from a specified file
create-secret-file:
	kubectl create secret generic file --from-file=config.json

# Create a secret with both a literal and a file, and output the YAML to a file
create-secret:
	kubectl create secret generic password --from-literal=password=password --from-file=config.json --dry-run=client -o yaml > secret-literal-file.yaml

# Apply the created secret to the cluster
apply-secret:
	kubectl apply -f secret-literal-file.yaml

# List all secrets in the current namespace
list-secret:
	kubectl get secret

# Show detailed information about a specific secret
show-secret:
	kubectl get secret password -o yaml

# Apply a Pod definition from a YAML file
apply-pod:
	kubectl apply -f pod.yaml

# List all Pods in the current namespace with additional information
list-pods:
	kubectl get pod -o wide

# Describe a specific Pod to see detailed information
describe-pod:
	kubectl describe pod password-generator-app

# Show environment variables of the specified Pod
show-pod-env:
	kubectl exec -it password-generator-app -- env | grep -i secret

# List and show the contents of a specific file within the Pod
show-pod-file:
	kubectl exec -it password-generator-app -- sh -c "ls -lha /config/config.json && cat /config/config.json"

# Delete the Kind cluster named "secret"
delete-all:
	kind delete cluster --name secret

# Specify phony targets that are not actual files
.PHONY: create-cluster create-secret-literal create-secret-file create-secret \
	apply-secret list-secret show-secret apply-pod list-pods describe-pod show-pod-env show-pod-file delete-all
