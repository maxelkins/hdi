# flask-app

A Flask application for processing and visualising sensor data. Uses Celery for background tasks and SQLAlchemy for persistence.

## Getting Started

### Set up a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

### Install dependencies

```bash
pip install -r requirements.txt
```

### Database Setup

Initialise the database and run migrations:

```bash
flask db upgrade
flask seed-data
```

### Run the development server

```bash
flask run --debug
```

The app will be available at `http://localhost:5000`.

## Testing

Run the test suite with pytest:

```bash
pytest
```

Run with coverage reporting:

```bash
pytest --cov=app --cov-report=term-missing
```

## Deployment

Build and push the container image:

```bash
docker build -t flask-app .
docker push registry.example.com/flask-app:latest
```

## Configuration

```yaml
DATABASE_URL: postgres://localhost/flask_app
SECRET_KEY: change-me
CELERY_BROKER_URL: redis://localhost:6379/0
```

## License

MIT
