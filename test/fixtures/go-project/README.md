# go-service

A microservice written in Go for processing event streams. Uses gRPC for inter-service communication and connects to PostgreSQL and Redis.

## Requirements

Go 1.22+ is required.

```bash
brew install go
```

## Setup

```bash
go mod download
cp config.example.yaml config.yaml
```

## Build

```bash
go build -o bin/service ./cmd/service
```

## Running

```bash
./bin/service --port 8080
```

## Testing

Run all tests:

```bash
go test ./...
```

Run tests with race detection and coverage:

```bash
go test -race -coverprofile=coverage.out ./...
```

## Deployment

Build the container image and push to the registry:

```bash
docker build -t go-service .
docker push ghcr.io/acme/go-service:latest
```

## Environment Variables

```env
PORT=8080
DB_HOST=localhost
REDIS_URL=redis://localhost:6379
```
