# express-api

A REST API for managing invoices, built with Express and PostgreSQL. Handles PDF generation, email notifications, and Stripe payment webhooks.

## Prerequisites

Requires Node.js 20+ and a running PostgreSQL instance.

```bash
nvm install 20
nvm use 20
```

## Installation

```bash
npm install
cp .env.example .env
npx prisma migrate dev
```

## Development

Start the development server with hot reload:

```bash
npm run dev
```

The API will be available at `http://localhost:4000/api`.

## Testing

Run the full test suite:

```bash
npm test
```

Run tests in watch mode during development:

```bash
npm run test:watch
```

## Deployment

Build the Docker image and push to the container registry:

```bash
docker build -t express-api .
docker push ghcr.io/acme/express-api:latest
```

## API Response

```json
{
  "status": "ok",
  "data": []
}
```

## License

MIT
