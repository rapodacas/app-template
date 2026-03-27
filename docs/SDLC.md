# Software Development Lifecycle (SDLC)

This document defines the standardized lifecycle for all production apps. It is designed to be operated by both humans and bots (Mission Control agents).

## Lifecycle Stages

### 1. Concept
- **Owner:** Raoul (via Telegram, chat, todo, or direct input)
- **Input:** Idea or problem statement
- **Output:** Formalized spec document in `docs/design/spec.md`
- **Gate:** Raoul approves spec before proceeding
- **Bot role:** Hunter drafts spec from idea, Raoul reviews

### 2. Design
- **Owner:** Hunter (Research & PR Review)
- **Input:** Approved spec
- **Output:** Architecture document (`docs/design/architecture.md`) covering:
  - Tech stack decisions
  - Database choice (SQLite / Postgres / NoSQL) with justification
  - Data model
  - API design
  - Hosting recommendation
  - Security considerations
- **Gate:** Raoul reviews and approves architecture
- **Bot role:** Hunter researches options and recommends; Raoul decides

### 3. Scaffold
- **Owner:** Mason (Build & Deploy)
- **Input:** Approved architecture
- **Output:** New GitHub repo created from this template, CI/CD wired, initial structure committed
- **Gate:** None — automated
- **Bot role:** Mason clones template, customizes, pushes to GitHub

### 4. Build
- **Owner:** Mason + Raoul
- **Input:** Feature requirements from spec
- **Output:** Code on feature branches, PRs opened
- **Gate:** PR review (bot reviews code quality, security, test coverage; Raoul reviews when tagged)
- **Bot role:** Mason writes code, opens PRs. Hunter reviews PRs for quality/security.

### 5. Test
- **Owner:** Automated CI + Vera (Test & UAT)
- **Input:** PR or merge to `dev`
- **Output:** Test results
- **Tests include:**
  - Unit tests (Jest)
  - Integration tests
  - End-to-end click-through tests (Playwright)
  - Lint / code quality checks
- **Gate:** All tests must pass for PR merge. Failed tests return to Build stage.
- **Bot role:** CI runs tests automatically. Vera reports results.

### 6. Deploy to Staging
- **Owner:** CI/CD (GitHub Actions)
- **Input:** Merge to `dev` branch
- **Output:** App deployed to staging environment
- **Gate:** Automated — deploy succeeds or fails
- **Bot role:** CI deploys. Ward monitors for errors.

### 7. Documentation Update
- **Owner:** Paige (Docs & Content)
- **Input:** Completed features on staging
- **Output:** Updated documentation for both personas:
  - **Developer docs** (`docs/developer/`) — API reference, setup guide, architecture notes
  - **End-user docs** (`docs/user/`) — User guide, features, FAQ
- **Gate:** Docs must be current before UAT proceeds
- **Bot role:** Paige updates docs based on code changes and feature specs

### 8. UAT (User Acceptance Testing)
- **Owner:** Vera (first pass) + Raoul (final approval)
- **Input:** Staging deployment + updated docs
- **Process:**
  1. Vera runs full click-through test suite against staging
  2. Vera verifies all documented features work as described
  3. If tests fail → return to **Build** stage
  4. If tests pass → Vera auto-approves and notifies Raoul
  5. Raoul reviews staging manually
  6. Raoul signals approval (e.g., "ship it") or requests changes
- **Gate:** **Both Vera approval AND Raoul approval required** (unless Raoul waives)
- **Bot role:** Vera runs Playwright tests, posts results to Telegram/Discord, asks for Raoul's review

### 9. Deploy to Production
- **Owner:** CI/CD (GitHub Actions)
- **Input:** Merge `dev` → `main` (triggered by Raoul's approval)
- **Output:** App deployed to production
- **Gate:** UAT passed OR explicit waiver from Raoul
- **Bot role:** CI deploys. Ward confirms deployment success.

### 10. Monitor
- **Owner:** Ward (Monitor & Verification)
- **Input:** Production deployment
- **Output:** Ongoing health checks, error alerts, usage metrics
- **Bot role:** Ward runs periodic health checks, alerts on errors via Telegram/Discord

---

## Environments

| Environment | Branch | Purpose | Deploy Trigger |
|-------------|--------|---------|----------------|
| Development | feature branches | Local development | Manual (`npm run dev`) |
| Staging | `dev` | Integration testing + UAT | Auto on merge to `dev` |
| Production | `main` | Live app | Auto on merge to `main` |

## Branch Strategy

```
main (production)
 └── dev (staging/integration)
      └── feature/xyz (feature work)
```

- Feature branches created from `dev`
- PRs from feature → `dev` (requires review + tests passing)
- PRs from `dev` → `main` (requires UAT approval)
- No direct commits to `main` or `dev`

## Database Decision Tree

Used by Hunter during the Design phase. **PostgreSQL is the default** for all new apps.

- **Default for all apps** → PostgreSQL (standard choice, handles everything from personal to production)
- **Truly offline/embedded use case** → SQLite (e.g., mobile app, desktop-only tool with no server)
- **Document-heavy, flexible schema, real-time sync** → NoSQL (MongoDB/Firebase)
- **Hybrid needs** → Postgres with JSONB columns

Hunter documents the recommendation and rationale in the architecture doc. Raoul approves.

## Hosting Decision Tree

- **Static / frontend-only** → GitHub Pages (free)
- **Backend required, personal use** → Railway free tier or local
- **Backend required, multi-user production** → Railway / Render / VPS
- **No custom domain** until app generates revenue — use platform subdomain

## PR Review Checklist (for bot reviewers)

- [ ] Code follows project conventions
- [ ] No security vulnerabilities (injection, XSS, exposed secrets)
- [ ] Tests added/updated for new functionality
- [ ] No unnecessary complexity or dead code
- [ ] Error handling at system boundaries
- [ ] Developer docs updated if API changed
- [ ] User docs updated if user-facing behavior changed

## UAT Checklist (for bot UAT)

- [ ] All e2e click-through tests pass on staging
- [ ] All documented features verified working
- [ ] No console errors or unhandled exceptions
- [ ] Developer docs are current
- [ ] User docs are current
- [ ] Performance acceptable (page loads < 3s)
- [ ] Mobile responsive (if applicable)
