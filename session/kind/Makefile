# Define default make command
default: create-cluster

# Create a Kind cluster with 1 control plane and 2 worker nodes
create-cluster:
	kind create cluster --name monitoring --config kind-config.yaml

# Delete the Kind cluster
delete-cluster:
	kind delete cluster --name mycluster

# Install Ingress Nginx
install-ingress-nginx:
	kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml

# Install Cert-Manager
install-cert-manager:
	kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.7.1/cert-manager.yaml

# Delete kube-prometheus
delete-kube-prometheus:
	kubectl delete --ignore-not-found=true -f https://raw.githubusercontent.com/prometheus-operator/kube-prometheus/main/manifests/
	kubectl delete --ignore-not-found=true -f https://raw.githubusercontent.com/prometheus-operator/kube-prometheus/main/manifests/setup

# Combine all install commands
install-all: install-ingress-nginx install-cert-manager install-kube-prometheus

# Clean up everything
clean: delete-kube-prometheus delete-cluster

# Install kube-prometheus
install-kube-prometheus:

    k create ns monitoring    
	helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
	helm repo update
	helm install prometheus-stack prometheus-community/kube-prometheus-stack

.PHONY: default create-cluster delete-cluster install-ingress-nginx install-cert-manager install-kube-prometheus delete-kube-prometheus install-all clean install-kube-prometheus
