# Phase 15 — Security, concurrency and performance audit

Date: 2026-08-22

## Security controls verified

- Tenant-owned queries use the authenticated `company_id`; cross-tenant product lookup returns `404`.
- RBAC is enforced in API middleware. A CASHIER requesting finance endpoints receives `403`.
- Platform administration requires both a valid tenant session and an explicit `platform_admins` grant.
- Platform-admin bootstrap is configured through `PLATFORM_ADMIN_PHONE`; no oldest/random user is elevated.
- Passwords use Argon2id. Refresh tokens are opaque, hashed, rotated, and token-family reuse revokes the session.
- Login failures lock accounts after repeated attempts; auth routes also have an IP/path rate limit.
- JSON bodies are size-limited and unknown fields are rejected.
- Security headers include CSP, HSTS, frame denial, MIME sniffing denial, referrer and permissions policies.
- Auth and security responses use `Cache-Control: no-store`.
- Financial records use reversal records instead of hard deletion.
- Access logs do not emit access/refresh tokens or passwords.

## Concurrency invariants verified

- Two simultaneous sales against one stock unit produced `201` and `409`; final stock was `0.000`.
- Sale idempotency replay returns the original sale and does not decrement stock twice.
- Purchase receipts lock order items and stocks before updating WAC.
- Returns lock sale items and reject quantities above the unreturned amount.
- Transfers reject duplicate receive operations.
- Debt payments lock receivables and reject overpayment.
- Expense and reversal operations lock and validate cashbox balances.

## Performance review

- High-volume tenant tables have company/date or company/status indexes.
- List endpoints use bounded limits; platform lists cap at 500 rows.
- Dashboard and report aggregation is executed server-side.
- PostgreSQL connection pooling is used through `pgxpool`.
- HTTP server read-header, read, write, idle and maximum-header limits are configured.

## Quality gates

```text
go test -race ./...
go vet ./...
npm run lint
npm run typecheck
npm run build
```

All passed after removing TypeScript suppression and demo/local-storage CRUD fallbacks.
