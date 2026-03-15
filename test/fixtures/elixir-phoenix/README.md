# phoenix-app

An Elixir/Phoenix web application.

## Setup

```bash
mix deps.get
mix ecto.setup
```

## Start the server

```bash
mix phx.server
```

Or inside IEx:

```bash
iex -S mix phx.server
```

## Configuration

```elixir
config :phoenix_app, PhoenixApp.Repo,
  database: "phoenix_app_dev",
  hostname: "localhost"
```

## Test

```bash
mix test
```
