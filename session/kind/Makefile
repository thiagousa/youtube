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
	kubectl delete --ignore-not-found=true -f  monitoring/kube-prometheus/manifests/
	kubectl delete --ignore-not-found=true -f  monitoring/kube-prometheus/manifests/setup/

# Combine all install commands
install-all: install-ingress-nginx install-cert-manager install-kube-prometheus

# Clean up everything
clean: delete-kube-prometheus delete-cluster

# Install Monitoring
install-kube-prometheus:
	kubectl apply --server-side -f monitoring/kube-prometheus/manifests/setup/
	kubectl wait \
	--for condition=Established \
	--all CustomResourceDefinition \
	--namespace=monitoring
	kubectl apply --server-side -f  monitoring/kube-prometheus/manifests/

# Port Forward Grafana 
grafana:
	kubectl port-forward -n monitoring svc/grafana 3030:3000

prometheus:
	kubectl port-forward -n monitoring svc/prometheus-k8s 9090

install-app:
	helm install password-generator-app ../k8s/password-generator-app/ 

upgrade-app:
	helm upgrade password-generator-app ../k8s/password-generator-app/ 

diff-app:
	helm diff upgrade password-generator-app ../k8s/password-generator-app/ 	

monitoring-up:
	docker compose  -f ../monitoring/docker-compose.yaml up -d 
    
monitoring-down:
	docker compose  -f ../monitoring/docker-compose.yaml down

labels-service-monitoring:
	kubectl get prometheus -n monitoring -o yaml | grep -i serviceMonitor -A3	

.PHONY: default create-cluster delete-cluster install-ingress-nginx install-cert-manager install-kube-prometheus delete-kube-prometheus install-all clean install-monitoring grafana prometheus install-app upgrade-app monitoring-up monitoring-down labels-service-monitoring