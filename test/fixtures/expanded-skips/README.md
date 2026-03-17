# skip-extras

## Installation

```bash
npm install
```

GraphQL schema:

```graphql
type Query {
  hello: String
}
```

Diff output:

```diff
- old line
+ new line
```

Diagram:

```mermaid
graph TD
  A-->B
```

HCL config:

```hcl
variable "region" {
  default = "us-east-1"
}
```

Then run:

```bash
npm run setup
```
