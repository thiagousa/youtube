# Makefile for Kubernetes operations on a Kind (Kubernetes in Docker) cluster
# -----------------------------------------

# Cluster Management
# ------------------
# Create a Kind cluster using a specified config file
create-cluster:
	kind create cluster --name services --config kind/kind-config.yaml

# Delete the Kind cluster named "services"
delete-all:
	kind delete cluster --name services


# Application Deployment
# ----------------------
# Create a Deployment for a resource-intensive application (nginx in this case),
# outputting the configuration to 'deployment.yaml' without applying it directly.
create-deployment:
	kubectl create deployment service --image nginx:latest --port 80 --replicas 1 -o yaml --dry-run=client > deployment.yaml

# Apply the deployment from 'deployment.yaml' to create resources in the cluster
apply-deployment:
	kubectl apply -f deployment.yaml

# list deployment
list-deployment:
	kubectl get deployment


# Service Creation
# ----------------
# Generate a ClusterIP service configuration for the 'service' deployment and
# save the output to 'clusterip-demo.yaml' without applying it.
create-svc-ClusterIP:
	kubectl expose deployment service --name service-cluster-ip --port 80 --target-port 80 --type ClusterIP -o yaml --dry-run=client > clusterip-demo.yaml

# Generate a NodePort service configuration for the 'service' deployment and
# save the output to 'node-port-demo.yaml' without applying it.
create-svc-NodePort:
	kubectl expose deployment service --name service-node-port --port 80 --target-port 80 --type NodePort -o yaml --dry-run=client > node-port-demo.yaml  

# Generate a LoadBalancer service configuration for the 'service' deployment and
# save the output to 'load-balancer-demo.yaml' without applying it.
create-svc-LoadBalancer:
	kubectl expose deployment service --name service-load-balancer --port 80 --target-port 80 --type LoadBalancer -o yaml --dry-run=client > load-balancer-demo.yaml

# Apply all saved service configurations (ClusterIP, NodePort, LoadBalancer) to the cluster
apply-svc:
	kubectl apply -f clusterip.yaml && kubectl apply -f node-port.yaml && kubectl apply -f load-balancer.yaml

# Check the status of all services in the cluster
list-svc:	
	kubectl get svc	

# Port Forwarding
# ---------------
# Forward traffic from local port 8888 to port 80 of the 'service-cluster-ip' service,
# allowing access to the service from localhost:8888
port-forward:
	kubectl port-forward svc/service-cluster-ip 8888:80 


# Specify phony targets that are not actual files
.PHONY: create-cluster delete-all create-deployment apply-deployment check-deployment create-svc-ClusterIP create-svc-NodePort create-svc-LoadBalancer apply-svc check-svc port-forward
