# {{APP_NAME}}

> {{APP_DESCRIPTION}}

## Quick Start

```bash
npm install
cp .env.example .env    # configure environment
npm run dev              # start dev server (localhost:3000)
```

## Environments

| Environment | Branch | URL | Deploys |
|-------------|--------|-----|---------|
| Development | `dev` | localhost:3000 | Manual |
| Staging | `dev` | TBD | Auto on merge to `dev` |
| Production | `main` | TBD | Auto on merge to `main` (requires UAT) |

## SDLC

This app follows the standardized SDLC defined in [docs/SDLC.md](docs/SDLC.md).

**Lifecycle:** Concept → Design → Scaffold → Build → Test → Staging → UAT → Production → Monitor

## Project Structure

```
src/                 # Application source code
  routes/            # Express route handlers
  models/            # Data models / DB schemas
  services/          # Business logic
  middleware/        # Express middleware
  utils/             # Shared utilities
tests/               # Test suite
  unit/              # Unit tests
  integration/       # Integration tests
  e2e/               # End-to-end / click-through tests
docs/                # Documentation
  developer/         # Developer documentation
  user/              # End-user documentation
  design/            # Architecture & design docs
  SDLC.md            # Software development lifecycle
.github/             # GitHub Actions CI/CD
public/              # Static assets (if applicable)
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm start` | Start production server |
| `npm test` | Run all tests |
| `npm run test:unit` | Run unit tests |
| `npm run test:e2e` | Run end-to-end click-through tests |
| `npm run lint` | Lint code |
| `npm run build` | Build for production |

## Documentation

- **Developers:** [docs/developer/](docs/developer/)
- **End Users:** [docs/user/](docs/user/)
- **Architecture:** [docs/design/](docs/design/)

## License

Private — All rights reserved.
