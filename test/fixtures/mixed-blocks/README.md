# mixed-app

An app with many code block types.

## Installation

Install the CLI:

```bash
npm install -g mixed-app
```

The config file looks like this:

```json
{
  "port": 3000
}
```

Environment setup:

```yaml
DATABASE_URL: postgres://localhost/app
```

```toml
[server]
port = 3000
```

Then initialize:

```shell
mixed-app init
```

## Running

```bash
mixed-app serve
```

Log output:

```log
[INFO] Server started on :3000
```

```xml
<config><port>3000</port></config>
```
