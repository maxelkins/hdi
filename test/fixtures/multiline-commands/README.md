# docker-app

## Installation

```bash
docker build \
  -t myapp:latest \
  .
```

## Usage

```bash
docker run \
  --name myapp \
  -p 8080:80 \
  myapp:latest
```

Simple command stays on one line:

```bash
docker ps
```
