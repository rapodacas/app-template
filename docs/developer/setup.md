# Developer Setup

## Prerequisites

- Node.js 20+
- npm 10+
- PostgreSQL installed locally
- Docker (optional, for containerized runs)

## Getting Started

```bash
git clone {{REPO_URL}}
cd {{app-name}}
createdb {{app-name}}
npm install
cp .env.example .env
npm run dev
```

## Running Tests

```bash
npm test              # All tests
npm run test:unit     # Unit only
npm run test:e2e      # E2E click-through (requires app running)
```

## Project Conventions

- Routes in `src/routes/`
- Business logic in `src/services/`
- Data models in `src/models/`
- All new features need tests
- PRs require passing CI before merge

## Branch Workflow

1. Create feature branch from `dev`: `git checkout -b feature/my-feature dev`
2. Commit and push
3. Open PR to `dev`
4. CI runs tests + bot review
5. Merge after approval
