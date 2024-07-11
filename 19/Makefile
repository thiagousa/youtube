# Define default make command
default: create-cluster

# Create a Kind cluster with 1 control plane and 2 worker nodes
1-create-cluster:
	kind create cluster --name namespace --config kind/kind-config.yaml

# Delete the Kind cluster
2-list-ns:
	kubectl get ns

# Delete the Kind cluster
3-create-ns-dev:
	kubectl create ns dev

# Delete the Kind cluster
4-create-ns-prod:
	kubectl create ns prod


# Delete the Kind cluster
5-create-pod-dev:
	kubectl run dev-pod --image=nginx --namespace=dev


# Delete the Kind cluster
6-create-pod-prod:
	kubectl run prod-pod --image=nginx --namespace=prod


# Delete the Kind cluster
7-list-pod-dev:
	kubectl get pods -n dev


# Delete the Kind cluster
8-list-pod-prod:
	kubectl get pods -n prod


# Delete the Kind cluster
9-delete-all:
	kind delete cluster --name namespace
