# My App

## Installation

Install with:

```bash
pip install myapp
```

## Usage

Run the app:

```bash
# This is a comment, not a heading
myapp serve --port 8080
```

Use the flag `--verbose` for more output.

```bash
# Required for production use
myapp configure --env production
```

## Development

### Importing test data

```bash
# Note: quote marks are required when passing parameters
myapp import 'data[test-fixtures@1.0.0]'
```

The output will look like:

```text
Imported 42 records
```
