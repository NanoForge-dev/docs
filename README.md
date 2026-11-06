<a href="https://github.com/NanoForge-dev/docs/actions/workflows/tests.yml"><img src="https://github.com/NanoForge-dev/docs/actions/workflows/tests.yml/badge.svg" alt="Tests status" /></a>

# NanoForge Documentation

The NanoForge documentation site, built with [Mintlify](https://mintlify.com): https://docs.nanoforge.eu

## How the site is made

Each product's pages live in its own repository and reach this one through the `docs-sync` action of [NanoForge-dev/actions](https://github.com/NanoForge-dev/actions), at each release of that repository:

| Folder                             | Written by      | Source                                                |
| ---------------------------------- | --------------- | ----------------------------------------------------- |
| `docs/engine`, `references/engine` | engine releases | `docs/docs`, the TypeDoc references (`pnpm run docs`) |
| `docs/cli`, `guides/cli`           | cli releases    | `docs/docs`, `docs/guides`                            |
| `docs/loader`                      | loader releases | `docs/docs`                                           |
| `docs/editor`                      | editor releases | `docs/docs`                                           |

- **Don't edit those folders here:** the next sync deletes and rewrites them. Change the pages in their repository.
- Each synced folder holds a `navigation.json`, written from the source repository's own one. It sets the order and the groups of its pages.
- `references/<product>/navigation.json` lists the reference versions: the latest release of each major.
- This repository owns `docs.json` (theme, tabs, dropdowns, redirects), `index.mdx` and `custom.css`. `docs.json` includes each `navigation.json` with a `$ref`, so a new product is one entry there.

## Commands

Mintlify needs Node 24 (`.nvmrc`); it refuses Node 25+.

```sh
pnpm dev            # preview on port 3001
pnpm validate       # docs.json, $refs, missing pages, MDX
pnpm broken-links
pnpm a11y
pnpm lint
```
