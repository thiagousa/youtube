SHELL := /bin/bash

KIND_CLUSTER := kind-lab
KIND_CONFIG  := kind.yaml
LITMUS_ADMIN_USER ?= admin
LITMUS_ADMIN_PASS ?= litmus

## —— Tools ————————————————————————————————————————————————————————————————
.PHONY: install-tools
install-tools: ## Install kubectl, Helm, and Kind (macOS arm64)
	@which brew >/dev/null 2>&1 || { echo "Homebrew is required: https://brew.sh"; exit 1; }
	brew install kubernetes-cli helm kind

## —— Cluster lifecycle ————————————————————————————————————————————————
.PHONY: up
up: ## Create kind cluster and install core ingress controller (robust + pinned)
	kind create cluster --name $(KIND_CLUSTER) --config $(KIND_CONFIG)

	helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
	helm repo update

	# find control-plane node
	CP_NODE=$$(kubectl get nodes -l node-role.kubernetes.io/control-plane= \
	  -o jsonpath='{.items[0].metadata.name}') ;\
	helm upgrade --install ingress-nginx ingress-nginx/ingress-nginx \
	  --namespace ingress-nginx --create-namespace \
	  --set controller.hostPort.enabled=true \
	  --set controller.ingressClassResource.default=true \
	  --set controller.nodeSelector.kubernetes\\.io/hostname=$$CP_NODE \
	  --set controller.tolerations[0].key=node-role.kubernetes.io/control-plane \
	  --set controller.tolerations[0].operator=Exists \
	  --set controller.tolerations[0].effect=NoSchedule \
	  --set controller.tolerations[1].key=node-role.kubernetes.io/master \
	  --set controller.tolerations[1].operator=Exists \
	  --set controller.tolerations[1].effect=NoSchedule \
	  --wait=false

	kubectl -n ingress-nginx rollout status deploy/ingress-nginx-controller --timeout=10m
	kubectl -n ingress-nginx wait \
	  --for=jsonpath='{.subsets[0].addresses}' endpoints/ingress-nginx-controller-admission \
	  --timeout=180s || true

	kubectl apply -f ingress/sample-nginx.yaml
	kubectl -n demo rollout status deploy/demo-nginx --timeout=2m

.PHONY: down
down: ## Delete kind cluster
	-kind delete cluster --name $(KIND_CLUSTER)

## —— Install apps ————————————————————————————————————————————————————————
.PHONY: install-all
install-all: install-kube-prometheus install-argo install-litmus install-k6 install-otel install-certmanager apply-ingresses ## Install all apps + ingresses

.PHONY: install-kube-prometheus
install-kube-prometheus: ## kube-prometheus-stack (Prometheus, Grafana, Alertmanager)
	helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
	helm repo update
	kubectl create namespace monitoring --dry-run=client -o yaml | kubectl apply -f -
	helm upgrade --install kube-prometheus-stack prometheus-community/kube-prometheus-stack \
	  --namespace monitoring \
	  --set grafana.service.type=ClusterIP \
	  --set prometheus.service.type=ClusterIP \
	  --set alertmanager.service.type=ClusterIP\
	  --set kubeStateMetrics.service.type=ClusterIP \
	  --set nodeExporter.service.type=ClusterIP \

.PHONY: install-argo
install-argo: ## Argo Workflows + UI
	helm repo add argo https://argoproj.github.io/argo-helm
	helm repo update
	kubectl create namespace argo --dry-run=client -o yaml | kubectl apply -f -
	helm upgrade --install argo-workflows argo/argo-workflows \
	  --namespace argo \
	  --set server.service.type=ClusterIP \
	  --set server.extraArgs="{--auth-mode=server}"

.PHONY: install-litmus
install-litmus:
	helm repo add litmuschaos https://litmuschaos.github.io/litmus-helm/
	helm repo update
	kubectl create namespace litmus --dry-run=client -o yaml | kubectl apply -f -
	helm -n litmus upgrade --install chaos litmuschaos/litmus \
	  --set mongodb.volumePermissions.enabled=false
	# optional: if you prefer forcing ARM images instead of disabling init:
	#  --set mongodb.image.registry=ghcr.io \
	#  --set mongodb.image.repository=zcube/bitnami-compat/mongodb \
	#  --set mongodb.image.tag=6.0.5 \
	#  --set mongodb.volumePermissions.image.registry=docker.io \
	#  --set mongodb.volumePermissions.image.repository=bitnami/os-shell \
	#  --set mongodb.volumePermissions.image.tag=12

.PHONY: install-k6
install-k6: ## Grafana k6-operator
	helm repo add grafana https://grafana.github.io/helm-charts
	helm repo update
	helm upgrade --install k6-operator grafana/k6-operator \
	  --namespace k6-operator --create-namespace

.PHONY: install-otel
install-otel: ## OpenTelemetry Operator
	helm repo add open-telemetry https://open-telemetry.github.io/opentelemetry-helm-charts
	helm repo update
	helm upgrade --install opentelemetry-operator open-telemetry/opentelemetry-operator \
	  --namespace opentelemetry-operator --create-namespace

.PHONY: install-certmanager
install-certmanager: ## cert-manager (installs CRDs too)
	helm repo add jetstack https://charts.jetstack.io
	helm repo update
	helm upgrade --install cert-manager jetstack/cert-manager \
	  --namespace cert-manager --create-namespace \
	  --set crds.enabled=true

.PHONY: apply-ingresses
apply-ingresses: ## Create Ingress objects for all apps
	kubectl apply -f ingress/apps-ingress.yaml

## —— Hostnames helper ————————————————————————————————————————————————
.PHONY: hosts
hosts: ## Show commands to add /etc/hosts entries
	@echo "To add hosts, run:"
	@echo 'sudo tee -a /etc/hosts <<EOF >/dev/null'
	@sed -n '1,999p' hosts.sample
	@echo 'EOF'

## —— Utilities ———————————————————————————————————————————————————————————
.PHONY: help
help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS=":.*?## "}; {printf "  \033[36m%-22s\033[0m %s\n", $$1, $$2}'
