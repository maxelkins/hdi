# ripfind

A fast file finder written in Rust.

## Installation

```bash
cargo install ripfind
```

Or build from source:

```bash
git clone https://github.com/example/ripfind.git
cd ripfind
cargo build --release
```

## Usage

```bash
ripfind "pattern" ~/projects
```

## Benchmarks

```text
ripfind:  0.45s
find:     3.21s
```
