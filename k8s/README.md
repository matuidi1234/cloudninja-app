# Déploiement Kubernetes

## Fichiers
- `deployment.yaml` : Déploiement de 3 pods avec probes
- `service.yaml` : Service NodePort exposant l'application
- `configmap.yaml` : Variables d'environnement non sensibles
- `secret.yaml` : Données sensibles encodées en base64

## Commandes

```bash
# Démarrer Minikube
minikube start

# Appliquer les fichiers
kubectl apply -f k8s/

# Accéder à l'app
minikube service nodejs-service
# Déploiement Kubernetes

## Fichiers
- `deployment.yaml` : Déploiement de 3 pods avec probes
- `service.yaml` : Service NodePort exposant l'application
- `configmap.yaml` : Variables d'environnement non sensibles
- `secret.yaml` : Données sensibles encodées en base64

## Commandes

```bash
# Démarrer Minikube
minikube start

# Appliquer les fichiers
kubectl apply -f k8s/

# Accéder à l'app
minikube service nodejs-service
