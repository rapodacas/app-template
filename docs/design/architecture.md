# {{APP_NAME}} — Architecture

> Authored by: Henry (Design phase)
> Approved by: Raoul on {{DATE}}

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Runtime | Node.js 20+ | Standard |
| Framework | Express | Standard |
| Database | {{SQLite / Postgres / MongoDB}} | {{Why}} |
| Testing | Jest + Playwright | Standard |
| Hosting | {{GitHub Pages / Railway / etc.}} | {{Why}} |

## Data Model

{{ERD or table descriptions}}

## API Design

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /health | Health check |
| GET | /api/... | {{...}} |

## Security Considerations

- {{Auth approach}}
- {{Input validation}}
- {{Secrets management}}

## Hosting & Environments

| Env | Platform | URL |
|-----|----------|-----|
| Staging | {{TBD}} | {{TBD}} |
| Production | {{TBD}} | {{TBD}} |
