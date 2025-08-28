# Mastra Monorepo Issue Reproduction

This is a pnpm monorepo issue reproduction for [mastra#6852](https://github.com/mastra-ai/mastra/issues/6852).

Bundling seems to work fine for monorepo packages, but breaks specifically when importing dayjs in one of them.

What I've noticed if helps troubleshooting - installing `dayjs` directly to the package where Mastra is installed fixes this problem.

## Reproduction steps

```bash
pnpm i
pnpm dev # Forwards to mastra dev under apps/myapp
```
