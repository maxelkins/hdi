# rails-app

A Ruby on Rails application.

## Prerequisites

- Ruby 3.3+
- PostgreSQL 16+
- Redis

```bash
brew install ruby postgresql redis
```

## Installation

```bash
bundle install
rails db:create db:migrate db:seed
```

## Running

```bash
bin/rails server
```

Or with Foreman:

```bash
bin/dev
```

## Testing

```bash
bundle exec rspec
```
