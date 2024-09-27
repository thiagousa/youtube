# Makefile for Kubernetes operations

# Create a Kind cluster using a specified config file
create-cluster:
	kind create cluster --name resources --config kind/kind-config.yaml

# Create a pod YAML file for an NGINX deployment (client-side dry run)
create-pod-file:
	kubectl run nginx --image=nginx:latest --port=80 --dry-run=client -o yaml > deployment/app/pod.yaml 

# Apply pod configuration from YAML (for resource-specific configuration)
apply-pod:
	kubectl apply -f deployment/app/pod-resources.yaml

# Enable metrics server for resource monitoring in Kubernetes
enable-metrics:
	kubectl apply -f metrics/components.yaml

# Check if the metrics server is running by filtering the pod name
check-metrics:
	kubectl -n kube-system get pods | grep metrics-server

# List all pods with wide output for additional details (e.g., IP, Node)
list-pods:
	kubectl get pod -o wide

# Continuously show node resource usage using `kubectl top nodes` every 2 seconds
show-node-resource:
	while true; do kubectl top nodes; sleep 2; done

# Continuously show pod resource usage using `kubectl top pod` every 2 seconds
show-pod-resource:
	while true; do kubectl top pod; sleep 2; done

# Deploy CPU resource-intensive application
create-cpu:
	kubectl apply -f deployment/cpu/deployment.yaml

# Deploy memory resource-intensive application
create-memory:
	kubectl apply -f deployment/memory/deployment.yaml

# Create traffic generator pod deployment
create-traffic:
	kubectl apply -f deployment/traffic/traffic-generator.yaml

# Install 'wrk' (a load testing tool) inside the traffic-generator pod
add-app-traffic:
	kubectl exec -it traffic-generator -- apk add --no-cache wrk

# Start load test on CPU app with 7 concurrent connections and 7 threads
start-app-traffic-cpu:
	kubectl exec -it traffic-generator -- wrk -c 7 -t 7 -d 99999 -H "Connection: Close" http://cpu

# Start load test on memory app with 7 concurrent connections and 7 threads
start-app-traffic-memory:
	kubectl exec -it traffic-generator -- wrk -c 7 -t 7 -d 99999 -H "Connection: Close" http://memory

# Stress test on CPU app with 100 concurrent connections and 100 threads
break-cpu:
	kubectl exec -it traffic-generator -- wrk -c 100 -t 100 -d 99999 -H "Connection: Close" http://cpu

# Stress test on memory app with 7 concurrent connections and 7 threads (as a placeholder)
break-memory:
	kubectl exec -it traffic-generator -- wrk -c 7 -t 7 -d 99999 -H "Connection: Close" http://memory

# Delete the Kind cluster named "resources"
delete-all:
	kind delete cluster --name resources

# Specify phony targets that are not actual files
.PHONY: create-cluster create-pod-file apply-pod enable-metrics list-pods show-node-resource show-pod-resource check-metrics create-cpu create-memory create-traffic add-app-traffic start-app-traffic-cpu start-app-traffic-memory break-cpu break-memory delete-all
