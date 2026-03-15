# k8s-platform

Kubernetes deployment with Helm charts.

## Dependencies

```bash
brew install kubectl helm
```

## Installation

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install my-release bitnami/nginx
```

## Usage

```bash
kubectl get pods
kubectl port-forward svc/my-release-nginx 8080:80
```

## Values

```yaml
replicaCount: 3
image:
  repository: nginx
  tag: "1.25"
```
