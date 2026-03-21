// Pre-computed hdi output data for 5 example projects
// Generated from test/fixtures/ from hdi

const PROJECTS = [
  {
    slug: "node-express",
    name: "express-api",
    description: "Invoice management REST API",
    lang: "JS",
    langFull: "JavaScript",
    readme: `# express-api

A REST API for managing invoices, built with Express and PostgreSQL. Handles PDF generation, email notifications, and Stripe payment webhooks.

## Prerequisites

Requires Node.js 20+ and a running PostgreSQL instance.

\`\`\`bash
nvm install 20
nvm use 20
\`\`\`

## Installation

\`\`\`bash
npm install
cp .env.example .env
npx prisma migrate dev
\`\`\`

## Development

Start the development server with hot reload:

\`\`\`bash
npm run dev
\`\`\`

The API will be available at \`http://localhost:4000/api\`.

## Testing

Run the full test suite:

\`\`\`bash
npm test
\`\`\`

Run tests in watch mode during development:

\`\`\`bash
npm run test:watch
\`\`\`

## Deployment

Build the Docker image and push to the container registry:

\`\`\`bash
docker build -t express-api .
docker push ghcr.io/acme/express-api:latest
\`\`\`

## API Response

\`\`\`json
{
  "status": "ok",
  "data": []
}
\`\`\`

## License

MIT`,
    modes: {
      default: [
        { type: "header", text: "Prerequisites" },
        { type: "command", text: "nvm install 20" },
        { type: "command", text: "nvm use 20" },
        { type: "header", text: "Installation" },
        { type: "command", text: "npm install" },
        { type: "command", text: "cp .env.example .env" },
        { type: "command", text: "npx prisma migrate dev" },
        { type: "header", text: "Development" },
        { type: "command", text: "npm run dev" },
        { type: "header", text: "Testing" },
        { type: "command", text: "npm test" },
        { type: "command", text: "npm run test:watch" },
        { type: "header", text: "Deployment" },
        { type: "command", text: "docker build -t express-api ." },
        { type: "command", text: "docker push ghcr.io/acme/express-api:latest" },
      ],
      install: [
        { type: "header", text: "Prerequisites" },
        { type: "command", text: "nvm install 20" },
        { type: "command", text: "nvm use 20" },
        { type: "header", text: "Installation" },
        { type: "command", text: "npm install" },
        { type: "command", text: "cp .env.example .env" },
        { type: "command", text: "npx prisma migrate dev" },
      ],
      run: [
        { type: "header", text: "Development" },
        { type: "command", text: "npm run dev" },
      ],
      test: [
        { type: "header", text: "Testing" },
        { type: "command", text: "npm test" },
        { type: "command", text: "npm run test:watch" },
      ],
      deploy: [
        { type: "header", text: "Deployment" },
        { type: "command", text: "docker build -t express-api ." },
        { type: "command", text: "docker push ghcr.io/acme/express-api:latest" },
      ],
      all: [
        { type: "header", text: "Prerequisites" },
        { type: "command", text: "nvm install 20" },
        { type: "command", text: "nvm use 20" },
        { type: "header", text: "Installation" },
        { type: "command", text: "npm install" },
        { type: "command", text: "cp .env.example .env" },
        { type: "command", text: "npx prisma migrate dev" },
        { type: "header", text: "Development" },
        { type: "command", text: "npm run dev" },
        { type: "header", text: "Testing" },
        { type: "command", text: "npm test" },
        { type: "command", text: "npm run test:watch" },
        { type: "header", text: "Deployment" },
        { type: "command", text: "docker build -t express-api ." },
        { type: "command", text: "docker push ghcr.io/acme/express-api:latest" },
      ],
    },
    check: [
      { tool: "nvm", installed: false },
      { tool: "npm", installed: true, version: "11.12.0" },
      { tool: "npx", installed: true, version: "10.2.2" },
      { tool: "docker", installed: true, version: "28.1.1" },
      { tool: "prisma", installed: false },
    ],
    fullProse: {
      default: [
        { type: "header", text: "Prerequisites" },
        { type: "empty", text: "" },
        { type: "prose", text: "Requires Node.js 20+ and a running PostgreSQL instance." },
        { type: "empty", text: "" },
        { type: "command", text: "nvm install 20" },
        { type: "command", text: "nvm use 20" },
        { type: "empty", text: "" },
        { type: "header", text: "Installation" },
        { type: "empty", text: "" },
        { type: "command", text: "npm install" },
        { type: "command", text: "cp .env.example .env" },
        { type: "command", text: "npx prisma migrate dev" },
        { type: "empty", text: "" },
        { type: "header", text: "Development" },
        { type: "empty", text: "" },
        { type: "prose", text: "Start the development server with hot reload:" },
        { type: "empty", text: "" },
        { type: "command", text: "npm run dev" },
        { type: "empty", text: "" },
        { type: "prose", text: "The API will be available at `http://localhost:4000/api`." },
        { type: "empty", text: "" },
        { type: "header", text: "Testing" },
        { type: "empty", text: "" },
        { type: "prose", text: "Run the full test suite:" },
        { type: "empty", text: "" },
        { type: "command", text: "npm test" },
        { type: "empty", text: "" },
        { type: "prose", text: "Run tests in watch mode during development:" },
        { type: "empty", text: "" },
        { type: "command", text: "npm run test:watch" },
        { type: "empty", text: "" },
        { type: "header", text: "Deployment" },
        { type: "empty", text: "" },
        { type: "prose", text: "Build the Docker image and push to the container registry:" },
        { type: "empty", text: "" },
        { type: "command", text: "docker build -t express-api ." },
        { type: "command", text: "docker push ghcr.io/acme/express-api:latest" },
      ],
      install: [
        { type: "header", text: "Prerequisites" },
        { type: "empty", text: "" },
        { type: "prose", text: "Requires Node.js 20+ and a running PostgreSQL instance." },
        { type: "empty", text: "" },
        { type: "command", text: "nvm install 20" },
        { type: "command", text: "nvm use 20" },
        { type: "empty", text: "" },
        { type: "header", text: "Installation" },
        { type: "empty", text: "" },
        { type: "command", text: "npm install" },
        { type: "command", text: "cp .env.example .env" },
        { type: "command", text: "npx prisma migrate dev" },
      ],
      run: [
        { type: "header", text: "Development" },
        { type: "empty", text: "" },
        { type: "prose", text: "Start the development server with hot reload:" },
        { type: "empty", text: "" },
        { type: "command", text: "npm run dev" },
        { type: "empty", text: "" },
        { type: "prose", text: "The API will be available at `http://localhost:4000/api`." },
      ],
      test: [
        { type: "header", text: "Testing" },
        { type: "empty", text: "" },
        { type: "prose", text: "Run the full test suite:" },
        { type: "empty", text: "" },
        { type: "command", text: "npm test" },
        { type: "empty", text: "" },
        { type: "prose", text: "Run tests in watch mode during development:" },
        { type: "empty", text: "" },
        { type: "command", text: "npm run test:watch" },
      ],
      deploy: [
        { type: "header", text: "Deployment" },
        { type: "empty", text: "" },
        { type: "prose", text: "Build the Docker image and push to the container registry:" },
        { type: "empty", text: "" },
        { type: "command", text: "docker build -t express-api ." },
        { type: "command", text: "docker push ghcr.io/acme/express-api:latest" },
      ],
      all: [
        { type: "header", text: "Prerequisites" },
        { type: "empty", text: "" },
        { type: "prose", text: "Requires Node.js 20+ and a running PostgreSQL instance." },
        { type: "empty", text: "" },
        { type: "command", text: "nvm install 20" },
        { type: "command", text: "nvm use 20" },
        { type: "empty", text: "" },
        { type: "header", text: "Installation" },
        { type: "empty", text: "" },
        { type: "command", text: "npm install" },
        { type: "command", text: "cp .env.example .env" },
        { type: "command", text: "npx prisma migrate dev" },
        { type: "empty", text: "" },
        { type: "header", text: "Development" },
        { type: "empty", text: "" },
        { type: "prose", text: "Start the development server with hot reload:" },
        { type: "empty", text: "" },
        { type: "command", text: "npm run dev" },
        { type: "empty", text: "" },
        { type: "prose", text: "The API will be available at `http://localhost:4000/api`." },
        { type: "empty", text: "" },
        { type: "header", text: "Testing" },
        { type: "empty", text: "" },
        { type: "prose", text: "Run the full test suite:" },
        { type: "empty", text: "" },
        { type: "command", text: "npm test" },
        { type: "empty", text: "" },
        { type: "prose", text: "Run tests in watch mode during development:" },
        { type: "empty", text: "" },
        { type: "command", text: "npm run test:watch" },
        { type: "empty", text: "" },
        { type: "header", text: "Deployment" },
        { type: "empty", text: "" },
        { type: "prose", text: "Build the Docker image and push to the container registry:" },
        { type: "empty", text: "" },
        { type: "command", text: "docker build -t express-api ." },
        { type: "command", text: "docker push ghcr.io/acme/express-api:latest" },
      ],
    },
  },
  {
    slug: "python-flask",
    name: "flask-app",
    description: "Background job monitoring dashboard",
    lang: "PY",
    langFull: "Python",
    readme: `# flask-app

A lightweight dashboard for monitoring background jobs, built with Flask and SQLAlchemy. Provides real-time status updates via WebSocket and a REST API for scheduling jobs.

## Setup

### Create a virtual environment

\`\`\`bash
python3 -m venv venv
source venv/bin/activate
\`\`\`

### Install dependencies

\`\`\`bash
pip install -r requirements.txt
\`\`\`

### Initialize the database

\`\`\`bash
flask db upgrade
\`\`\`

## Running

Start the development server with auto-reload:

\`\`\`bash
flask run --debug
\`\`\`

## Testing

\`\`\`bash
pytest
\`\`\`

With coverage reporting:

\`\`\`bash
pytest --cov=app --cov-report=html
\`\`\`

## Deployment

Deploy to Google Cloud Run:

\`\`\`bash
gcloud builds submit --tag gcr.io/my-project/flask-app
gcloud run deploy flask-app --image gcr.io/my-project/flask-app --region us-central1
\`\`\`

## Configuration

\`\`\`yaml
DATABASE_URL: postgres://localhost/flask_app
SECRET_KEY: change-me
REDIS_URL: redis://localhost:6379/0
\`\`\`

## License

MIT`,
    modes: {
      default: [
        { type: "header", text: "Setup" },
        { type: "empty", text: "(no commands \u2014 use --full to see prose)" },
        { type: "subheader", text: "Create a virtual environment" },
        { type: "command", text: "python3 -m venv venv" },
        { type: "command", text: "source venv/bin/activate" },
        { type: "subheader", text: "Install dependencies" },
        { type: "command", text: "pip install -r requirements.txt" },
        { type: "subheader", text: "Initialize the database" },
        { type: "command", text: "flask db upgrade" },
        { type: "header", text: "Running" },
        { type: "command", text: "flask run --debug" },
        { type: "header", text: "Testing" },
        { type: "command", text: "pytest" },
        { type: "command", text: "pytest --cov=app --cov-report=html" },
        { type: "header", text: "Deployment" },
        { type: "command", text: "gcloud builds submit --tag gcr.io/my-project/flask-app" },
        { type: "command", text: "gcloud run deploy flask-app --image gcr.io/my-project/flask-app --region us-central1" },
        { type: "header", text: "Configuration" },
        { type: "empty", text: "(no commands \u2014 use --full to see prose)" },
      ],
      install: [
        { type: "header", text: "Setup" },
        { type: "empty", text: "(no commands \u2014 use --full to see prose)" },
        { type: "subheader", text: "Create a virtual environment" },
        { type: "command", text: "python3 -m venv venv" },
        { type: "command", text: "source venv/bin/activate" },
        { type: "subheader", text: "Install dependencies" },
        { type: "command", text: "pip install -r requirements.txt" },
        { type: "subheader", text: "Initialize the database" },
        { type: "command", text: "flask db upgrade" },
      ],
      run: [
        { type: "header", text: "Running" },
        { type: "command", text: "flask run --debug" },
      ],
      test: [
        { type: "header", text: "Testing" },
        { type: "command", text: "pytest" },
        { type: "command", text: "pytest --cov=app --cov-report=html" },
      ],
      deploy: [
        { type: "header", text: "Deployment" },
        { type: "command", text: "gcloud builds submit --tag gcr.io/my-project/flask-app" },
        { type: "command", text: "gcloud run deploy flask-app --image gcr.io/my-project/flask-app --region us-central1" },
      ],
      all: [
        { type: "header", text: "Setup" },
        { type: "empty", text: "(no commands \u2014 use --full to see prose)" },
        { type: "subheader", text: "Create a virtual environment" },
        { type: "command", text: "python3 -m venv venv" },
        { type: "command", text: "source venv/bin/activate" },
        { type: "subheader", text: "Install dependencies" },
        { type: "command", text: "pip install -r requirements.txt" },
        { type: "subheader", text: "Initialize the database" },
        { type: "command", text: "flask db upgrade" },
        { type: "header", text: "Running" },
        { type: "command", text: "flask run --debug" },
        { type: "header", text: "Testing" },
        { type: "command", text: "pytest" },
        { type: "command", text: "pytest --cov=app --cov-report=html" },
        { type: "header", text: "Deployment" },
        { type: "command", text: "gcloud builds submit --tag gcr.io/my-project/flask-app" },
        { type: "command", text: "gcloud run deploy flask-app --image gcr.io/my-project/flask-app --region us-central1" },
        { type: "header", text: "Configuration" },
        { type: "empty", text: "(no commands \u2014 use --full to see prose)" },
      ],
    },
    check: [
      { tool: "python3", installed: true, version: "3.14.3" },
      { tool: "pip", installed: true, version: "26.0.1" },
      { tool: "flask", installed: true, version: "3.1.3" },
      { tool: "pytest", installed: true, version: "8.4.1" },
      { tool: "gcloud", installed: false },
    ],
    fullProse: {
      default: [
        { type: "header", text: "Setup" },
        { type: "empty", text: "" },
        { type: "subheader", text: "Create a virtual environment" },
        { type: "empty", text: "" },
        { type: "command", text: "python3 -m venv venv" },
        { type: "command", text: "source venv/bin/activate" },
        { type: "empty", text: "" },
        { type: "subheader", text: "Install dependencies" },
        { type: "empty", text: "" },
        { type: "command", text: "pip install -r requirements.txt" },
        { type: "empty", text: "" },
        { type: "subheader", text: "Initialize the database" },
        { type: "empty", text: "" },
        { type: "command", text: "flask db upgrade" },
        { type: "empty", text: "" },
        { type: "header", text: "Running" },
        { type: "empty", text: "" },
        { type: "prose", text: "Start the development server with auto-reload:" },
        { type: "empty", text: "" },
        { type: "command", text: "flask run --debug" },
        { type: "empty", text: "" },
        { type: "header", text: "Testing" },
        { type: "empty", text: "" },
        { type: "command", text: "pytest" },
        { type: "empty", text: "" },
        { type: "prose", text: "With coverage reporting:" },
        { type: "empty", text: "" },
        { type: "command", text: "pytest --cov=app --cov-report=html" },
        { type: "empty", text: "" },
        { type: "header", text: "Deployment" },
        { type: "empty", text: "" },
        { type: "prose", text: "Deploy to Google Cloud Run:" },
        { type: "empty", text: "" },
        { type: "command", text: "gcloud builds submit --tag gcr.io/my-project/flask-app" },
        { type: "command", text: "gcloud run deploy flask-app --image gcr.io/my-project/flask-app --region us-central1" },
        { type: "empty", text: "" },
        { type: "header", text: "Configuration" },
        { type: "empty", text: "" },
        { type: "prose", text: "DATABASE_URL: postgres://localhost/flask_app" },
        { type: "prose", text: "SECRET_KEY: change-me" },
        { type: "prose", text: "REDIS_URL: redis://localhost:6379/0" },
      ],
      install: [
        { type: "header", text: "Setup" },
        { type: "empty", text: "" },
        { type: "subheader", text: "Create a virtual environment" },
        { type: "empty", text: "" },
        { type: "command", text: "python3 -m venv venv" },
        { type: "command", text: "source venv/bin/activate" },
        { type: "empty", text: "" },
        { type: "subheader", text: "Install dependencies" },
        { type: "empty", text: "" },
        { type: "command", text: "pip install -r requirements.txt" },
        { type: "empty", text: "" },
        { type: "subheader", text: "Initialize the database" },
        { type: "empty", text: "" },
        { type: "command", text: "flask db upgrade" },
      ],
      run: [
        { type: "header", text: "Running" },
        { type: "empty", text: "" },
        { type: "prose", text: "Start the development server with auto-reload:" },
        { type: "empty", text: "" },
        { type: "command", text: "flask run --debug" },
      ],
      test: [
        { type: "header", text: "Testing" },
        { type: "empty", text: "" },
        { type: "command", text: "pytest" },
        { type: "empty", text: "" },
        { type: "prose", text: "With coverage reporting:" },
        { type: "empty", text: "" },
        { type: "command", text: "pytest --cov=app --cov-report=html" },
      ],
      deploy: [
        { type: "header", text: "Deployment" },
        { type: "empty", text: "" },
        { type: "prose", text: "Deploy to Google Cloud Run:" },
        { type: "empty", text: "" },
        { type: "command", text: "gcloud builds submit --tag gcr.io/my-project/flask-app" },
        { type: "command", text: "gcloud run deploy flask-app --image gcr.io/my-project/flask-app --region us-central1" },
      ],
      all: [
        { type: "header", text: "Setup" },
        { type: "empty", text: "" },
        { type: "subheader", text: "Create a virtual environment" },
        { type: "empty", text: "" },
        { type: "command", text: "python3 -m venv venv" },
        { type: "command", text: "source venv/bin/activate" },
        { type: "empty", text: "" },
        { type: "subheader", text: "Install dependencies" },
        { type: "empty", text: "" },
        { type: "command", text: "pip install -r requirements.txt" },
        { type: "empty", text: "" },
        { type: "subheader", text: "Initialize the database" },
        { type: "empty", text: "" },
        { type: "command", text: "flask db upgrade" },
        { type: "empty", text: "" },
        { type: "header", text: "Running" },
        { type: "empty", text: "" },
        { type: "prose", text: "Start the development server with auto-reload:" },
        { type: "empty", text: "" },
        { type: "command", text: "flask run --debug" },
        { type: "empty", text: "" },
        { type: "header", text: "Testing" },
        { type: "empty", text: "" },
        { type: "command", text: "pytest" },
        { type: "empty", text: "" },
        { type: "prose", text: "With coverage reporting:" },
        { type: "empty", text: "" },
        { type: "command", text: "pytest --cov=app --cov-report=html" },
        { type: "empty", text: "" },
        { type: "header", text: "Deployment" },
        { type: "empty", text: "" },
        { type: "prose", text: "Deploy to Google Cloud Run:" },
        { type: "empty", text: "" },
        { type: "command", text: "gcloud builds submit --tag gcr.io/my-project/flask-app" },
        { type: "command", text: "gcloud run deploy flask-app --image gcr.io/my-project/flask-app --region us-central1" },
        { type: "empty", text: "" },
        { type: "header", text: "Configuration" },
        { type: "empty", text: "" },
        { type: "prose", text: "DATABASE_URL: postgres://localhost/flask_app" },
        { type: "prose", text: "SECRET_KEY: change-me" },
        { type: "prose", text: "REDIS_URL: redis://localhost:6379/0" },
      ],
    },
  },
  {
    slug: "ruby-rails",
    name: "rails-app",
    description: "E-commerce storefront and admin panel",
    lang: "RB",
    langFull: "Ruby",
    readme: `# rails-app

An e-commerce storefront built with Ruby on Rails, PostgreSQL, and Sidekiq for background job processing. Includes a customer-facing shop, admin dashboard, and REST API.

## Prerequisites

- Ruby 3.3+
- PostgreSQL 16+
- Redis 7+

\`\`\`bash
brew install ruby postgresql redis
\`\`\`

## Installation

\`\`\`bash
bundle install
rails db:create db:migrate db:seed
\`\`\`

## Running

Start all services with Foreman:

\`\`\`bash
bin/dev
\`\`\`

Or run just the Rails server:

\`\`\`bash
bin/rails server
\`\`\`

## Testing

\`\`\`bash
bundle exec rspec
\`\`\`

Run a specific test file:

\`\`\`bash
bundle exec rspec spec/models/order_spec.rb
\`\`\`

## Deployment

Deploy with Kamal:

\`\`\`bash
kamal deploy
\`\`\`

## License

MIT`,
    modes: {
      default: [
        { type: "header", text: "Prerequisites" },
        { type: "command", text: "brew install ruby postgresql redis" },
        { type: "header", text: "Installation" },
        { type: "command", text: "bundle install" },
        { type: "command", text: "rails db:create db:migrate db:seed" },
        { type: "header", text: "Running" },
        { type: "command", text: "bin/dev" },
        { type: "command", text: "bin/rails server" },
        { type: "header", text: "Testing" },
        { type: "command", text: "bundle exec rspec" },
        { type: "command", text: "bundle exec rspec spec/models/order_spec.rb" },
        { type: "header", text: "Deployment" },
        { type: "command", text: "kamal deploy" },
      ],
      install: [
        { type: "header", text: "Prerequisites" },
        { type: "command", text: "brew install ruby postgresql redis" },
        { type: "header", text: "Installation" },
        { type: "command", text: "bundle install" },
        { type: "command", text: "rails db:create db:migrate db:seed" },
      ],
      run: [
        { type: "header", text: "Running" },
        { type: "command", text: "bin/dev" },
        { type: "command", text: "bin/rails server" },
      ],
      test: [
        { type: "header", text: "Testing" },
        { type: "command", text: "bundle exec rspec" },
        { type: "command", text: "bundle exec rspec spec/models/order_spec.rb" },
      ],
      deploy: [
        { type: "header", text: "Deployment" },
        { type: "command", text: "kamal deploy" },
      ],
      all: [
        { type: "header", text: "Prerequisites" },
        { type: "command", text: "brew install ruby postgresql redis" },
        { type: "header", text: "Installation" },
        { type: "command", text: "bundle install" },
        { type: "command", text: "rails db:create db:migrate db:seed" },
        { type: "header", text: "Running" },
        { type: "command", text: "bin/dev" },
        { type: "command", text: "bin/rails server" },
        { type: "header", text: "Testing" },
        { type: "command", text: "bundle exec rspec" },
        { type: "command", text: "bundle exec rspec spec/models/order_spec.rb" },
        { type: "header", text: "Deployment" },
        { type: "command", text: "kamal deploy" },
      ],
    },
    check: [
      { tool: "brew", installed: true, version: "5.1.0" },
      { tool: "bundler", installed: true, version: "4.0.8" },
      { tool: "rails", installed: true, version: "8.1.2" },
      { tool: "rspec", installed: false },
      { tool: "kamal", installed: false },
    ],
    fullProse: {
      default: [
        { type: "header", text: "Prerequisites" },
        { type: "empty", text: "" },
        { type: "prose", text: "- Ruby 3.3+" },
        { type: "prose", text: "- PostgreSQL 16+" },
        { type: "prose", text: "- Redis 7+" },
        { type: "empty", text: "" },
        { type: "command", text: "brew install ruby postgresql redis" },
        { type: "empty", text: "" },
        { type: "header", text: "Installation" },
        { type: "empty", text: "" },
        { type: "command", text: "bundle install" },
        { type: "command", text: "rails db:create db:migrate db:seed" },
        { type: "empty", text: "" },
        { type: "header", text: "Running" },
        { type: "empty", text: "" },
        { type: "prose", text: "Start all services with Foreman:" },
        { type: "empty", text: "" },
        { type: "command", text: "bin/dev" },
        { type: "empty", text: "" },
        { type: "prose", text: "Or run just the Rails server:" },
        { type: "empty", text: "" },
        { type: "command", text: "bin/rails server" },
        { type: "empty", text: "" },
        { type: "header", text: "Testing" },
        { type: "empty", text: "" },
        { type: "command", text: "bundle exec rspec" },
        { type: "empty", text: "" },
        { type: "prose", text: "Run a specific test file:" },
        { type: "empty", text: "" },
        { type: "command", text: "bundle exec rspec spec/models/order_spec.rb" },
        { type: "empty", text: "" },
        { type: "header", text: "Deployment" },
        { type: "empty", text: "" },
        { type: "prose", text: "Deploy with Kamal:" },
        { type: "empty", text: "" },
        { type: "command", text: "kamal deploy" },
      ],
      install: [
        { type: "header", text: "Prerequisites" },
        { type: "empty", text: "" },
        { type: "prose", text: "- Ruby 3.3+" },
        { type: "prose", text: "- PostgreSQL 16+" },
        { type: "prose", text: "- Redis 7+" },
        { type: "empty", text: "" },
        { type: "command", text: "brew install ruby postgresql redis" },
        { type: "empty", text: "" },
        { type: "header", text: "Installation" },
        { type: "empty", text: "" },
        { type: "command", text: "bundle install" },
        { type: "command", text: "rails db:create db:migrate db:seed" },
      ],
      run: [
        { type: "header", text: "Running" },
        { type: "empty", text: "" },
        { type: "prose", text: "Start all services with Foreman:" },
        { type: "empty", text: "" },
        { type: "command", text: "bin/dev" },
        { type: "empty", text: "" },
        { type: "prose", text: "Or run just the Rails server:" },
        { type: "empty", text: "" },
        { type: "command", text: "bin/rails server" },
      ],
      test: [
        { type: "header", text: "Testing" },
        { type: "empty", text: "" },
        { type: "command", text: "bundle exec rspec" },
        { type: "empty", text: "" },
        { type: "prose", text: "Run a specific test file:" },
        { type: "empty", text: "" },
        { type: "command", text: "bundle exec rspec spec/models/order_spec.rb" },
      ],
      deploy: [
        { type: "header", text: "Deployment" },
        { type: "empty", text: "" },
        { type: "prose", text: "Deploy with Kamal:" },
        { type: "empty", text: "" },
        { type: "command", text: "kamal deploy" },
      ],
      all: [
        { type: "header", text: "Prerequisites" },
        { type: "empty", text: "" },
        { type: "prose", text: "- Ruby 3.3+" },
        { type: "prose", text: "- PostgreSQL 16+" },
        { type: "prose", text: "- Redis 7+" },
        { type: "empty", text: "" },
        { type: "command", text: "brew install ruby postgresql redis" },
        { type: "empty", text: "" },
        { type: "header", text: "Installation" },
        { type: "empty", text: "" },
        { type: "command", text: "bundle install" },
        { type: "command", text: "rails db:create db:migrate db:seed" },
        { type: "empty", text: "" },
        { type: "header", text: "Running" },
        { type: "empty", text: "" },
        { type: "prose", text: "Start all services with Foreman:" },
        { type: "empty", text: "" },
        { type: "command", text: "bin/dev" },
        { type: "empty", text: "" },
        { type: "prose", text: "Or run just the Rails server:" },
        { type: "empty", text: "" },
        { type: "command", text: "bin/rails server" },
        { type: "empty", text: "" },
        { type: "header", text: "Testing" },
        { type: "empty", text: "" },
        { type: "command", text: "bundle exec rspec" },
        { type: "empty", text: "" },
        { type: "prose", text: "Run a specific test file:" },
        { type: "empty", text: "" },
        { type: "command", text: "bundle exec rspec spec/models/order_spec.rb" },
        { type: "empty", text: "" },
        { type: "header", text: "Deployment" },
        { type: "empty", text: "" },
        { type: "prose", text: "Deploy with Kamal:" },
        { type: "empty", text: "" },
        { type: "command", text: "kamal deploy" },
      ],
    },
  },
  {
    slug: "react-nextjs",
    name: "my-next-app",
    description: "Customer portal with authentication",
    lang: "TS",
    langFull: "TypeScript",
    readme: `# my-next-app

A customer portal built with Next.js 14 and the App Router. Uses Tailwind CSS for styling, Prisma for database access, and NextAuth for authentication.

## Installation

Install dependencies:

\`\`\`bash
pnpm install
\`\`\`

Set up the environment and database:

\`\`\`bash
cp .env.example .env.local
pnpm db:push
\`\`\`

## Development

Run the development server:

\`\`\`bash
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Testing

Run unit tests:

\`\`\`bash
pnpm test
\`\`\`

Run end-to-end tests with Playwright:

\`\`\`bash
pnpm test:e2e
\`\`\`

## Deploy

Build and deploy to Vercel:

\`\`\`bash
pnpm build
npx vercel --prod
\`\`\`

## Learn More

See the [Next.js docs](https://nextjs.org/docs).`,
    modes: {
      default: [
        { type: "header", text: "Installation" },
        { type: "command", text: "pnpm install" },
        { type: "command", text: "cp .env.example .env.local" },
        { type: "command", text: "pnpm db:push" },
        { type: "header", text: "Development" },
        { type: "command", text: "pnpm dev" },
        { type: "header", text: "Testing" },
        { type: "command", text: "pnpm test" },
        { type: "command", text: "pnpm test:e2e" },
        { type: "header", text: "Deploy" },
        { type: "command", text: "pnpm build" },
        { type: "command", text: "npx vercel --prod" },
      ],
      install: [
        { type: "header", text: "Installation" },
        { type: "command", text: "pnpm install" },
        { type: "command", text: "cp .env.example .env.local" },
        { type: "command", text: "pnpm db:push" },
      ],
      run: [
        { type: "header", text: "Development" },
        { type: "command", text: "pnpm dev" },
      ],
      test: [
        { type: "header", text: "Testing" },
        { type: "command", text: "pnpm test" },
        { type: "command", text: "pnpm test:e2e" },
      ],
      deploy: [
        { type: "header", text: "Deploy" },
        { type: "command", text: "pnpm build" },
        { type: "command", text: "npx vercel --prod" },
      ],
      all: [
        { type: "header", text: "Installation" },
        { type: "command", text: "pnpm install" },
        { type: "command", text: "cp .env.example .env.local" },
        { type: "command", text: "pnpm db:push" },
        { type: "header", text: "Development" },
        { type: "command", text: "pnpm dev" },
        { type: "header", text: "Testing" },
        { type: "command", text: "pnpm test" },
        { type: "command", text: "pnpm test:e2e" },
        { type: "header", text: "Deploy" },
        { type: "command", text: "pnpm build" },
        { type: "command", text: "npx vercel --prod" },
      ],
    },
    check: [
      { tool: "pnpm", installed: true, version: "10.6.0" },
      { tool: "npx", installed: true, version: "10.2.2" },
      { tool: "vercel", installed: false },
    ],
    fullProse: {
      default: [
        { type: "header", text: "Installation" },
        { type: "empty", text: "" },
        { type: "prose", text: "Install dependencies:" },
        { type: "empty", text: "" },
        { type: "command", text: "pnpm install" },
        { type: "empty", text: "" },
        { type: "prose", text: "Set up the environment and database:" },
        { type: "empty", text: "" },
        { type: "command", text: "cp .env.example .env.local" },
        { type: "command", text: "pnpm db:push" },
        { type: "empty", text: "" },
        { type: "header", text: "Development" },
        { type: "empty", text: "" },
        { type: "prose", text: "Run the development server:" },
        { type: "empty", text: "" },
        { type: "command", text: "pnpm dev" },
        { type: "empty", text: "" },
        { type: "prose", text: "Open [http://localhost:3000](http://localhost:3000) to see the app." },
        { type: "empty", text: "" },
        { type: "header", text: "Testing" },
        { type: "empty", text: "" },
        { type: "prose", text: "Run unit tests:" },
        { type: "empty", text: "" },
        { type: "command", text: "pnpm test" },
        { type: "empty", text: "" },
        { type: "prose", text: "Run end-to-end tests with Playwright:" },
        { type: "empty", text: "" },
        { type: "command", text: "pnpm test:e2e" },
        { type: "empty", text: "" },
        { type: "header", text: "Deploy" },
        { type: "empty", text: "" },
        { type: "prose", text: "Build and deploy to Vercel:" },
        { type: "empty", text: "" },
        { type: "command", text: "pnpm build" },
        { type: "command", text: "npx vercel --prod" },
      ],
      install: [
        { type: "header", text: "Installation" },
        { type: "empty", text: "" },
        { type: "prose", text: "Install dependencies:" },
        { type: "empty", text: "" },
        { type: "command", text: "pnpm install" },
        { type: "empty", text: "" },
        { type: "prose", text: "Set up the environment and database:" },
        { type: "empty", text: "" },
        { type: "command", text: "cp .env.example .env.local" },
        { type: "command", text: "pnpm db:push" },
      ],
      run: [
        { type: "header", text: "Development" },
        { type: "empty", text: "" },
        { type: "prose", text: "Run the development server:" },
        { type: "empty", text: "" },
        { type: "command", text: "pnpm dev" },
        { type: "empty", text: "" },
        { type: "prose", text: "Open [http://localhost:3000](http://localhost:3000) to see the app." },
      ],
      test: [
        { type: "header", text: "Testing" },
        { type: "empty", text: "" },
        { type: "prose", text: "Run unit tests:" },
        { type: "empty", text: "" },
        { type: "command", text: "pnpm test" },
        { type: "empty", text: "" },
        { type: "prose", text: "Run end-to-end tests with Playwright:" },
        { type: "empty", text: "" },
        { type: "command", text: "pnpm test:e2e" },
      ],
      deploy: [
        { type: "header", text: "Deploy" },
        { type: "empty", text: "" },
        { type: "prose", text: "Build and deploy to Vercel:" },
        { type: "empty", text: "" },
        { type: "command", text: "pnpm build" },
        { type: "command", text: "npx vercel --prod" },
      ],
      all: [
        { type: "header", text: "Installation" },
        { type: "empty", text: "" },
        { type: "prose", text: "Install dependencies:" },
        { type: "empty", text: "" },
        { type: "command", text: "pnpm install" },
        { type: "empty", text: "" },
        { type: "prose", text: "Set up the environment and database:" },
        { type: "empty", text: "" },
        { type: "command", text: "cp .env.example .env.local" },
        { type: "command", text: "pnpm db:push" },
        { type: "empty", text: "" },
        { type: "header", text: "Development" },
        { type: "empty", text: "" },
        { type: "prose", text: "Run the development server:" },
        { type: "empty", text: "" },
        { type: "command", text: "pnpm dev" },
        { type: "empty", text: "" },
        { type: "prose", text: "Open [http://localhost:3000](http://localhost:3000) to see the app." },
        { type: "empty", text: "" },
        { type: "header", text: "Testing" },
        { type: "empty", text: "" },
        { type: "prose", text: "Run unit tests:" },
        { type: "empty", text: "" },
        { type: "command", text: "pnpm test" },
        { type: "empty", text: "" },
        { type: "prose", text: "Run end-to-end tests with Playwright:" },
        { type: "empty", text: "" },
        { type: "command", text: "pnpm test:e2e" },
        { type: "empty", text: "" },
        { type: "header", text: "Deploy" },
        { type: "empty", text: "" },
        { type: "prose", text: "Build and deploy to Vercel:" },
        { type: "empty", text: "" },
        { type: "command", text: "pnpm build" },
        { type: "command", text: "npx vercel --prod" },
      ],
    },
  },
  {
    slug: "go-project",
    name: "go-service",
    description: "API gateway for microservices",
    lang: "GO",
    langFull: "Go",
    readme: `# go-service

An API gateway written in Go that handles authentication, rate limiting, and request routing for a microservices architecture. Uses gRPC for internal communication and exposes a REST API.

## Requirements

\`\`\`bash
brew install go protobuf
\`\`\`

## Setup

\`\`\`bash
go mod download
cp config.example.yaml config.yaml
\`\`\`

## Build

\`\`\`bash
go build -o bin/service ./cmd/service
\`\`\`

## Running

\`\`\`bash
./bin/service --config config.yaml
\`\`\`

## Testing

\`\`\`bash
go test ./...
\`\`\`

Run with verbose output and race detection:

\`\`\`bash
go test -v -race ./...
\`\`\`

## Deployment

Build the container image and deploy to Kubernetes:

\`\`\`bash
docker build -t go-service .
kubectl apply -f deploy/
\`\`\`

## Environment Variables

\`\`\`env
PORT=8080
DB_HOST=localhost
LOG_LEVEL=info
\`\`\``,
    modes: {
      default: [
        { type: "header", text: "Requirements" },
        { type: "command", text: "brew install go protobuf" },
        { type: "header", text: "Setup" },
        { type: "command", text: "go mod download" },
        { type: "command", text: "cp config.example.yaml config.yaml" },
        { type: "header", text: "Build" },
        { type: "command", text: "go build -o bin/service ./cmd/service" },
        { type: "header", text: "Running" },
        { type: "command", text: "./bin/service --config config.yaml" },
        { type: "header", text: "Testing" },
        { type: "command", text: "go test ./..." },
        { type: "command", text: "go test -v -race ./..." },
        { type: "header", text: "Deployment" },
        { type: "command", text: "docker build -t go-service ." },
        { type: "command", text: "kubectl apply -f deploy/" },
        { type: "header", text: "Environment Variables" },
        { type: "empty", text: "(no commands \u2014 use --full to see prose)" },
      ],
      install: [
        { type: "header", text: "Requirements" },
        { type: "command", text: "brew install go protobuf" },
        { type: "header", text: "Setup" },
        { type: "command", text: "go mod download" },
        { type: "command", text: "cp config.example.yaml config.yaml" },
      ],
      run: [
        { type: "header", text: "Running" },
        { type: "command", text: "./bin/service --config config.yaml" },
      ],
      test: [
        { type: "header", text: "Testing" },
        { type: "command", text: "go test ./..." },
        { type: "command", text: "go test -v -race ./..." },
      ],
      deploy: [
        { type: "header", text: "Deployment" },
        { type: "command", text: "docker build -t go-service ." },
        { type: "command", text: "kubectl apply -f deploy/" },
      ],
      all: [
        { type: "header", text: "Requirements" },
        { type: "command", text: "brew install go protobuf" },
        { type: "header", text: "Setup" },
        { type: "command", text: "go mod download" },
        { type: "command", text: "cp config.example.yaml config.yaml" },
        { type: "header", text: "Build" },
        { type: "command", text: "go build -o bin/service ./cmd/service" },
        { type: "header", text: "Running" },
        { type: "command", text: "./bin/service --config config.yaml" },
        { type: "header", text: "Testing" },
        { type: "command", text: "go test ./..." },
        { type: "command", text: "go test -v -race ./..." },
        { type: "header", text: "Deployment" },
        { type: "command", text: "docker build -t go-service ." },
        { type: "command", text: "kubectl apply -f deploy/" },
        { type: "header", text: "Environment Variables" },
        { type: "empty", text: "(no commands \u2014 use --full to see prose)" },
      ],
    },
    check: [
      { tool: "brew", installed: true, version: "5.1.0" },
      { tool: "go", installed: true, version: "1.26.1" },
      { tool: "docker", installed: true, version: "28.1.1" },
      { tool: "kubectl", installed: false },
    ],
    fullProse: {
      default: [
        { type: "header", text: "Requirements" },
        { type: "empty", text: "" },
        { type: "command", text: "brew install go protobuf" },
        { type: "empty", text: "" },
        { type: "header", text: "Setup" },
        { type: "empty", text: "" },
        { type: "command", text: "go mod download" },
        { type: "command", text: "cp config.example.yaml config.yaml" },
        { type: "empty", text: "" },
        { type: "header", text: "Build" },
        { type: "empty", text: "" },
        { type: "command", text: "go build -o bin/service ./cmd/service" },
        { type: "empty", text: "" },
        { type: "header", text: "Running" },
        { type: "empty", text: "" },
        { type: "command", text: "./bin/service --config config.yaml" },
        { type: "empty", text: "" },
        { type: "header", text: "Testing" },
        { type: "empty", text: "" },
        { type: "command", text: "go test ./..." },
        { type: "empty", text: "" },
        { type: "prose", text: "Run with verbose output and race detection:" },
        { type: "empty", text: "" },
        { type: "command", text: "go test -v -race ./..." },
        { type: "empty", text: "" },
        { type: "header", text: "Deployment" },
        { type: "empty", text: "" },
        { type: "prose", text: "Build the container image and deploy to Kubernetes:" },
        { type: "empty", text: "" },
        { type: "command", text: "docker build -t go-service ." },
        { type: "command", text: "kubectl apply -f deploy/" },
        { type: "empty", text: "" },
        { type: "header", text: "Environment Variables" },
        { type: "empty", text: "" },
        { type: "prose", text: "PORT=8080" },
        { type: "prose", text: "DB_HOST=localhost" },
        { type: "prose", text: "LOG_LEVEL=info" },
      ],
      install: [
        { type: "header", text: "Requirements" },
        { type: "empty", text: "" },
        { type: "command", text: "brew install go protobuf" },
        { type: "empty", text: "" },
        { type: "header", text: "Setup" },
        { type: "empty", text: "" },
        { type: "command", text: "go mod download" },
        { type: "command", text: "cp config.example.yaml config.yaml" },
      ],
      run: [
        { type: "header", text: "Running" },
        { type: "empty", text: "" },
        { type: "command", text: "./bin/service --config config.yaml" },
      ],
      test: [
        { type: "header", text: "Testing" },
        { type: "empty", text: "" },
        { type: "command", text: "go test ./..." },
        { type: "empty", text: "" },
        { type: "prose", text: "Run with verbose output and race detection:" },
        { type: "empty", text: "" },
        { type: "command", text: "go test -v -race ./..." },
      ],
      deploy: [
        { type: "header", text: "Deployment" },
        { type: "empty", text: "" },
        { type: "prose", text: "Build the container image and deploy to Kubernetes:" },
        { type: "empty", text: "" },
        { type: "command", text: "docker build -t go-service ." },
        { type: "command", text: "kubectl apply -f deploy/" },
      ],
      all: [
        { type: "header", text: "Requirements" },
        { type: "empty", text: "" },
        { type: "command", text: "brew install go protobuf" },
        { type: "empty", text: "" },
        { type: "header", text: "Setup" },
        { type: "empty", text: "" },
        { type: "command", text: "go mod download" },
        { type: "command", text: "cp config.example.yaml config.yaml" },
        { type: "empty", text: "" },
        { type: "header", text: "Build" },
        { type: "empty", text: "" },
        { type: "command", text: "go build -o bin/service ./cmd/service" },
        { type: "empty", text: "" },
        { type: "header", text: "Running" },
        { type: "empty", text: "" },
        { type: "command", text: "./bin/service --config config.yaml" },
        { type: "empty", text: "" },
        { type: "header", text: "Testing" },
        { type: "empty", text: "" },
        { type: "command", text: "go test ./..." },
        { type: "empty", text: "" },
        { type: "prose", text: "Run with verbose output and race detection:" },
        { type: "empty", text: "" },
        { type: "command", text: "go test -v -race ./..." },
        { type: "empty", text: "" },
        { type: "header", text: "Deployment" },
        { type: "empty", text: "" },
        { type: "prose", text: "Build the container image and deploy to Kubernetes:" },
        { type: "empty", text: "" },
        { type: "command", text: "docker build -t go-service ." },
        { type: "command", text: "kubectl apply -f deploy/" },
        { type: "empty", text: "" },
        { type: "header", text: "Environment Variables" },
        { type: "empty", text: "" },
        { type: "prose", text: "PORT=8080" },
        { type: "prose", text: "DB_HOST=localhost" },
        { type: "prose", text: "LOG_LEVEL=info" },
      ],
    },
  },
];

const HELP_TEXT = `hdi - "How do I..." \u2014 Extracts setup/run/test commands from a README.

Usage:
  hdi                           Interactive command picker (default in a terminal)
  hdi install                   Just install/setup commands
  hdi run                       Just run/start commands
  hdi test                      Just test commands
  hdi deploy                    Just deploy/release commands
  hdi all                       Show all matched sections
  hdi check                     Check which tools are installed
  hdi [mode] --full             Include prose around commands
  hdi [mode] --raw              Plain markdown output (no colour, good for piping)

Interactive controls:
  \u2191/\u2193  k/j     Navigate commands
  Enter        Execute the highlighted command
  c            Copy highlighted command to clipboard
  q / Esc      Quit

Aliases: "install" = "setup" = "i", "run" = "start" = "r", "test" = "t", "deploy" = "d", "check" = "c"`;

const VERSION = "0.16.0";
