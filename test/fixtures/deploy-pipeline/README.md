# my-service

A microservice with a full deploy pipeline.

## Install

```bash
npm install
```

## Run

```bash
npm start
```

## Test

```bash
npm test
```

## Deploy

```bash
kubectl apply -f k8s/
```

## Deployment

```bash
helm upgrade --install my-service ./charts
```

## Release

```bash
./scripts/release.sh
```

## CI/CD

```bash
act -j deploy
```

## Publishing

```bash
npm publish
```

## Rollout

```bash
kubectl rollout restart deployment/my-service
```
