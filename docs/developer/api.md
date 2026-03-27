# API Reference

## Base URL

- **Development:** `http://localhost:3000`
- **Staging:** `{{STAGING_URL}}`
- **Production:** `{{PRODUCTION_URL}}`

## Endpoints

### Health Check

```
GET /health
```

**Response:**
```json
{
  "status": "ok",
  "app": "app-name",
  "version": "0.1.0",
  "uptime": 123.456,
  "timestamp": "2026-03-27T00:00:00.000Z"
}
```

### API Root

```
GET /api
```

**Response:**
```json
{
  "message": "API is running"
}
```

---

> Add your app's API endpoints below as they are built.
