# Mastra Monorepo Issue Reproduction

This is a pnpm monorepo issue reproduction for [mastra#6852](https://github.com/mastra-ai/mastra/issues/6852).

## This monorepo doesn't use a barrell rollup
There is no `index.ts` file in @acme/shared
Our current monorepo follows this philosophy:
https://tkdodo.eu/blog/please-stop-using-barrel-files
https://uglow.medium.com/burn-the-barrel-c282578f21b6

## Reproduction steps

```bash
pnpm i
pnpm dev # Forwards to mastra dev under apps/myapp
```

## Error seen
Using `@mastra/server@0.17.0-alpha.5`:
```
mastra-monorepo-repro % pnpm dev

> mastra-monorepo-reproduction@1.0.0 dev /Users/cian/Code/mastra-monorepo-repro
> pnpm --filter @acme/myapp run mastra-dev


> @acme/myapp@0.0.0 mastra-dev /Users/cian/Code/mastra-monorepo-repro/apps/myapp
> mastra dev

ERROR [2025-09-17 09:22:24.760 +0100] (Mastra CLI): Could not load /Users/cian/Code/mastra-monorepo-repro/packages/shared/src/index.ts (imported by virtual:#virtual-@acme/shared): ENOENT: no such file or directory, open '/Users/cian/Code/mastra-monorepo-repro/packages/shared/src/index.ts'
```