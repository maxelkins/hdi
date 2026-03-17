# medium-app

A full-stack web application with a Python backend and React frontend.

## Prerequisites

- Python 3.11+
- Node.js 20+
- PostgreSQL 15+
- Redis 7+

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/example/medium-app.git
cd medium-app
```

### Backend Setup

Create a virtual environment and install Python dependencies:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Copy the example environment file:

```bash
cp .env.example .env
```

Environment configuration:

```env
DATABASE_URL=postgres://localhost/medium_app
REDIS_URL=redis://localhost:6379
SECRET_KEY=change-me
```

### Frontend Setup

```bash
cd frontend
npm install
cd ..
```

### Database Setup

```bash
python manage.py migrate
python manage.py seed
```

## Running the App

Start the backend server:

```bash
python manage.py runserver
```

In a separate terminal, start the frontend dev server:

```bash
cd frontend
npm run dev
```

Or run both with:

```bash
make dev
```

## Testing

Run the full test suite:

```bash
pytest
```

Run frontend tests:

```bash
cd frontend
npm test
```

Run with coverage:

```console
$ pytest --cov=app --cov-report=html
============ 142 passed in 8.32s ============
```

## Build

```bash
npm run build --prefix frontend
python manage.py collectstatic --no-input
```

## Docker

Build and run with Docker Compose:

```bash
docker compose up --build
```

Or run in detached mode:

```bash
docker compose up -d
```

## Configuration

The app uses the following environment variables:

```toml
[database]
url = "postgres://localhost/medium_app"
pool_size = 10

[redis]
url = "redis://localhost:6379"
```

## Deployment

```bash
docker build -t medium-app:latest .
docker push registry.example.com/medium-app:latest
kubectl apply -f k8s/
```

## API Documentation

The API schema:

```graphql
type Query {
  users: [User!]!
  posts(limit: Int): [Post!]!
}

type User {
  id: ID!
  name: String!
  email: String!
}
```

## License

MIT
