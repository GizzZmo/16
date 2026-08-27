# Pax Atlas

[![CI](https://github.com/GizzZmo/16/actions/workflows/ci.yml/badge.svg)](https://github.com/GizzZmo/16/actions/workflows/ci.yml)
[![Deploy](https://github.com/GizzZmo/16/actions/workflows/deploy.yml/badge.svg)](https://github.com/GizzZmo/16/actions/workflows/deploy.yml)
[![CodeQL](https://github.com/GizzZmo/16/actions/workflows/codeql.yml/badge.svg)](https://github.com/GizzZmo/16/actions/workflows/codeql.yml)
[![Dependency review](https://github.com/GizzZmo/16/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/GizzZmo/16/actions/workflows/dependency-review.yml)

An editorial guide to world peace initiatives — and a standing offer you can sign.

**Live:** [gizzzmo.github.io/16](https://gizzzmo.github.io/16/) · **[The Pact](#the-pact)** · Atlas · Initiatives · Timeline · Ways to act

![Pax Atlas](public/og.jpg)

## What it is

Pax Atlas is a magazine-style web app that maps the work of peace: UN missions, humanitarian law, nuclear treaties, local mediators, and youth encounter programmes. It is independent editorial — not affiliated with the United Nations or the organizations profiled.

Facts in the atlas are current as of 2026.

## The Pact

*To All Who Share This Earth* is a personal peace agreement initiated by **Jon Constantine**. It is not a treaty of states. It is a standing offer of non-aggression, shared stewardship, and restorative dialogue, open to anyone who chooses to affix their name.

> Peace is not the absence of conflict, but the deliberate decision to meet it without destruction.

Signatures are stored only on the signer’s device (local storage). They are a personal pledge, not a public ledger.

## Features

| Surface | What you can do |
| --- | --- |
| **The Pact** | Read the three articles and sign with a printed name |
| **Atlas** | Browse initiatives by world region |
| **Initiatives** | Filter 16 profiles by practice, region, or a local shortlist |
| **Timeline** | Walk accords from Westphalia to the Pact for the Future |
| **Act** | Six concrete next steps (local peacebuilders, unarmed protection, ICRC, ICAN, …) |

## Stack

- [React](https://react.dev/) 19 and [TanStack Start](https://tanstack.com/start) / Router
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Vite](https://vite.dev/) 8
- [Zustand](https://github.com/pmndrs/zustand) for saved initiatives and local pact signatures
- Node.js 22 (see [`.nvmrc`](.nvmrc))

No accounts and no database. Auth stays off. Pact names never leave the browser.

## Local development

Requires [Node.js](https://nodejs.org/) 22 and npm 10.

```bash
git clone https://github.com/GizzZmo/16.git
cd 16
npm ci
npm run dev
```

The app listens on `http://localhost:8080`.

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build (Vercel / Nitro) |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |
| `npm run test:unit` | App unit tests (what CI runs) |
| `npm test` | Grok builder self-tests plus app unit tests |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

CI on GitHub runs lint, the app unit tests, typecheck, and the production build. It does not run the Grok-platform self-tests, which assert sandbox identity independent of this app.

Always commit a lockfile that matches `package.json`. GitHub Actions uses `npm ci`, which refuses to install when the two files have drifted.

## Continuous integration and deployment

Workflows live in [`.github/workflows/`](.github/workflows/) and follow GitHub’s [secure-use](https://docs.github.com/en/actions/reference/security/secure-use) guidance.

| Workflow | When it runs | What it does |
| --- | --- | --- |
| [CI](.github/workflows/ci.yml) | Push / PR to `main`, manual | `npm ci`, lint, unit tests, typecheck, Vercel production build |
| [Deploy](.github/workflows/deploy.yml) | Push to `main`, manual | Prerenders a static site and publishes it to GitHub Pages |
| [CodeQL](.github/workflows/codeql.yml) | Push / PR to `main`, weekly Monday | JavaScript/TypeScript analysis with `security-extended` queries |
| [Dependency review](.github/workflows/dependency-review.yml) | Pull requests | Fails the PR if a new dependency introduces a high or critical advisory |

The live site is **[https://gizzzmo.github.io/16/](https://gizzzmo.github.io/16/)**. The deploy job uses the official Pages actions (`configure-pages`, `upload-pages-artifact`, `deploy-pages`) with OIDC — no deploy tokens. Asset URLs and the router `basepath` are set from the Pages `base_path` so the app works under `/16/`.

GitHub Pages has to be switched on **once** for a new repository. Open [Settings → Pages](https://github.com/GizzZmo/16/settings/pages), set **Source** to **GitHub Actions**, then re-run [Deploy](https://github.com/GizzZmo/16/actions/workflows/deploy.yml). After that, every push to `main` publishes by itself.


Hardening applied to every workflow:

- Actions pinned to **full 40-character commit SHAs** (tags can move; SHAs cannot). Version comments let Dependabot bump them.
- Default `GITHUB_TOKEN` is `contents: read` only. Deploy additionally uses `pages: write` and `id-token: write`. CodeQL writes `security-events`.
- `actions/checkout` sets `persist-credentials: false` so the token is not left in `.git`.
- Runners are pinned to `ubuntu-24.04` (not a floating `ubuntu-latest`).
- `concurrency` cancels superseded CI runs. Deploy uses `cancel-in-progress: false` so a live publish is not aborted.
- Jobs have an explicit timeout.
- Deploy is gated on the `github-pages` [environment](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments).

[Dependabot](.github/dependabot.yml) opens grouped weekly PRs for GitHub Actions and npm (minor/patch). [CODEOWNERS](.github/CODEOWNERS) flags workflow and lockfile changes for review.

## Project layout

```text
src/
  routes/          Pages (home, pact, atlas, initiatives, timeline, act)
  data/            Initiative catalog and pact text
  components/      Shell, cards, UI primitives
  lib/             Saved shortlist and local pact signatures
public/images/     Editorial photography
.github/workflows/ CI, Deploy, CodeQL, and dependency review
```

## Credits

Pact initiated by Jon Constantine. Profiles describe real organizations from public sources. Built with the Grok App Builder on TanStack Start.

This repository is an independent editorial project. It is not a legal instrument of public international law.
