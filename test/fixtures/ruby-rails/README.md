# rails-app

A Ruby on Rails application for team project management. Includes real-time updates via Action Cable and background job processing with Sidekiq.

## Prerequisites

- Ruby 3.3+
- PostgreSQL 16+
- Redis 7+

```bash
brew install ruby postgresql redis
```

## Installation

```bash
bundle install
rails db:create db:migrate db:seed
```

## Running

Start the Rails server:

```bash
bin/rails server
```

Or start all processes (web, worker, CSS watcher) with Foreman:

```bash
bin/dev
```

The app will be available at `http://localhost:3000`.

## Testing

Run the full test suite:

```bash
bundle exec rspec
```

Run a specific test file:

```bash
bundle exec rspec spec/models/project_spec.rb
```

## Deployment

Deploy to production via Kamal:

```bash
kamal setup
kamal deploy
```

## License

MIT
