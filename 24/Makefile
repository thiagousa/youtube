# Makefile for Kubernetes operations

# Cluster Management
# ------------------

# Create a Kind cluster using a specified config file
create-cluster:
	kind create cluster --name hpa --config kind/kind-config.yaml

# Delete the Kind cluster named "hpa"
delete-all:
	kind delete cluster --name hpa

# Metrics Server Setup
# --------------------

# Enable metrics server for resource monitoring in Kubernetes
enable-metrics:
	kubectl apply -f metrics/components.yaml

# Check if the metrics server is running by filtering the pod name
check-metrics:
	kubectl -n kube-system get pods | grep metrics-server

# Application Deployment
# ----------------------

# Deploy HPA resource-intensive application
create-deployment:
	kubectl apply -f deployment/hpa/deployment.yaml

# Create traffic generator pod deployment
create-traffic:
	kubectl apply -f deployment/traffic/traffic-generator.yaml

# Apply Horizontal Pod Autoscaler (HPA) configuration - CPU
apply-hpa:
	kubectl apply -f deployment/hpa/hpa.yaml


# Continuously show pod resource usage using `kubectl top pod` every 2 seconds
show-hpa:
	while true; do kubectl get hpa; sleep 2; done


# Resource Monitoring
# -------------------

# Continuously show node resource usage using `kubectl top nodes` every 2 seconds
show-node-resource:
	while true; do kubectl top nodes; sleep 2; done

# Continuously show pod resource usage using `kubectl top pod` every 2 seconds
show-pod-resource:
	while true; do kubectl top pod; sleep 2; done

# Traffic Generation
# ------------------

# Install 'wrk' (a load testing tool) inside the traffic-generator pod
add-app-traffic:
	kubectl exec -it traffic-generator -- apk add --no-cache wrk

# Start load test on CPU app with 100 concurrent connections and 100 threads
start-app-traffic-cpu:
	kubectl exec -it traffic-generator -- wrk -c 100 -t 100 -d 99999 -H "Connection: Close" http://hpa/

# Start load test on memory app with 7 concurrent connections and 7 threads
start-app-traffic-memory:
	kubectl exec -it traffic-generator -- wrk -c 7 -t 7 -d 99999 -H "Connection: Close" http://hpa/


# Specify phony targets that are not actual files
.PHONY: create-cluster delete-all enable-metrics check-metrics create-hpa create-traffic \
        show-node-resource show-pod-resource add-app-traffic start-app-traffic-cpu \
        start-app-traffic-memory apply-hpa