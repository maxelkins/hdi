# infra

Terraform infrastructure for our platform.

## Prerequisites

```bash
brew install terraform awscli
aws configure
```

## Setup

```bash
terraform init
terraform plan
```

## Deploy

```bash
terraform apply -auto-approve
```

## Configuration

```json
{
  "region": "us-east-1",
  "environment": "production"
}
```

## Outputs

```text
vpc_id = "vpc-abc123"
public_subnet = "subnet-def456"
```
