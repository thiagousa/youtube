# Define default make command
default: create-cluster

# Monitoring
1-monitoring-up:
	docker compose  -f my-app-local/docker-compose.yaml up -d 
    
2-service-down:
	docker rm --force foobar-exporter

#My App - Containerizing
3-monitoring-down:
	docker compose  -f my-app-local/docker-compose.yaml down

4-monitoring-up:
	docker compose  -f my-app-local/docker-compose.yaml up -d 

5-monitoring-down:
	docker compose  -f my-app-local/docker-compose.yaml down
# Create a Kind cluster with 1 control plane and 2 worker nodes
1-create-cluster:
	kind create cluster --name monitoring --config kind/kind-config.yaml

# Install Monitoring
2-install-kube-prometheus:
	kubectl apply --server-side -f kind/monitoring/kube-prometheus/manifests/setup/
	kubectl wait \
	--for condition=Established \
	--all CustomResourceDefinition \
	--namespace=monitoring
	kubectl apply --server-side -f  kind/monitoring/kube-prometheus/manifests/

# Port Forward Grafana 
3-grafana:
	kubectl port-forward -n monitoring svc/grafana 3030:3000

4-prometheus:
	kubectl port-forward -n monitoring svc/prometheus-k8s 9090

5-alertmanager:
	kubectl port-forward -n monitoring svc/alertmanager-operated 3838:9093

6-install-app:
	helm install password-generator-app k8s/password-generator-app/ 

7-upgrade-app:
	helm upgrade password-generator-app k8s/password-generator-app/ 

8-diff-app:
	helm diff upgrade password-generator-app k8s/password-generator-app/ 	

9-labels-service-monitoring:
	kubectl get prometheus -n monitoring -o yaml | grep -i serviceMonitor -A3	

# Delete kube-prometheus
10-delete-kube-prometheus:
	kubectl delete --ignore-not-found=true -f  kind/monitoring/kube-prometheus/manifests/
	kubectl delete --ignore-not-found=true -f  kind/monitoring/kube-prometheus/manifests/setup/

# Delete the Kind cluster
11-delete-cluster:
	kind delete cluster --name monitoring

.PHONY: default 1-monitoring-up 2-service-down 3-monitoring-down 4-monitoring-up 5-monitoring-down 1-create-cluster 2-install-kube-prometheus 3-grafana 4-prometheus 5-alertmanager 6-install-app 7-upgrade-app 8-diff-app 9-labels-service-monitoring 10-delete-kube-prometheus 11-delete-cluster