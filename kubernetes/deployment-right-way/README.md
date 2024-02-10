# Deploy on Kubernetes on the Right way 🌟

![Project Overview](/kubernetes/deployment-right-way/screenshot/deploy-on-kubernetes.jpeg)

Dive into Kubernetes with confidence! This guide is crafted to illuminate the path for beginners and refine the techniques of seasoned users, ensuring deployments are executed flawlessly. Avoid the common pitfalls and learn the right way to deploy with ease and precision.

## Requirements

**For Windows Users:**
- Docker Desktop for Windows installed. [Guide](https://www.youtube.com/watch?v=8MrnvUSW_34)
- Kind installed. [Guide](https://www.youtube.com/watch?v=kbeqNY0v0c4&t)

**For Ubuntu Users:**
- Docker installed. [Guide](https://www.youtube.com/watch?v=f1JqnioiCaQ)
- Kind installed. [Guide](https://www.youtube.com/watch?v=rFAQRhi-Vs0)

**For MacOS Users:**
- Docker Desktop for MacOS installed. [Guide](https://www.youtube.com/watch?v=knarlToekQ0&t)
- Kind installed. [Guide](https://www.youtube.com/watch?v=s1gmbUgVkL)

### Initial Steps:
1. **Clone the repository:**
   ```
   git clone https://github.com/thiagousa/youtube.git
   ```
2. **Navigate to the project directory:**
   ```
   cd youtube/kubernetes/deployment-right-way
   ```
3. **Create the Kind Kubernetes Cluster:**
   ```
   kind create cluster --config kind-config.yaml
   ```
4. **Verify the Cluster and Pods are operational:**
   ```
   kubectl get nodes -o wide
   kubectl get pod -A
   ```

## Installation Guide for the Wrong Way

1. **Pod Creation:**
   ```
   kubectl run pod-wrong-way --image="thiagousa/wrong:latest" --port=80
   ```
2. **Expose the Pod:**
   ```
   kubectl expose pod pod-wrong-way --port 80
   ```
3. **Port-forwarding pod:**
   ```
   kubectl port-forward svc/pod-wrong-way 8888:80
   ```
4. **Delete pod:**
   ```
   kubectl delete pod pod-wrong-way
   ```

## The Correct Deployment Strategy

1. **Create a deployment:**
   ```
   kubectl create deployment pod-right-way --image=thiagousa/right:latest --port=80 --replicas=1
   ```
2. **Verify pod:**
   ```
   kubectl get pod
   ```
3. **Expose the deployment:**
   ```
   kubectl expose deployment pod-right-way --port 80
   ```
4. ** Port Forward the Service**
   ```
   kubectl port-forward svc/pod-right-way 9999:80
   ```
5. **Access & Validate:** Visit http://localhost:9999/ to see your deployment in action.
6. **Delete pod:**
   ```
   kubectl delete deployment pod-right-way
   ```
## Delete Cluster
   ```
   kind delete cluster
   ```
## Support My Work

Creating free, high-quality videos and resources for everyone is challenging. Your support enables me to invest more in content creation, enhancing overall quality. Becoming a member offers significant support and comes with cool perks as a token of appreciation.

Remember, ***support is optional***. Whether you choose to become a member or not, you'll have full access to all my videos and resources.

Support here: [https://www.patreon.com/thiagodsantos](https://www.patreon.com/thiagodsantos) or [https://www.buymeacoffee.com/thiagodsantos](https://www.buymeacoffee.com/thiagodsantos)