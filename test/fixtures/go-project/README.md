# go-service

A microservice written in Go.

## Requirements

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

## Environment Variables

```env
PORT=8080
DB_HOST=localhost
```
