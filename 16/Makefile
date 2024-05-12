# Define default make command
default: create-cluster

# Create a Kind cluster with 1 control plane and 2 worker nodes
create-cluster:
	kind create cluster --name taint --config kind-config.yaml

# Install Deployment A
deploy-a:
	kubectl apply -f pod-a.yaml

# Deployment B
deploy-b:
	kubectl apply -f pod-b.yaml

taint: 
	kubectl taint nodes taint-worker gpu="yes":NoSchedule

untaint: 
	kubectl taint nodes taint-worker gpu="yes":NoSchedule-

check:
	kubectl get pod -o wide 

describe:
	 kubectl describe nodes taint-worker | grep -i gpu -B2 -A3

delete:
	kind delete cluster --name taint

.PHONY: default create-cluster deploy-a deploy-b delete taint untaint describe check