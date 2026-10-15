# Phase 16 release audit

Audit date: 2026-08-22

## Release gates

- `make check`: Go tests/vet/build, both panel lint/typecheck/build.
- `make test-race`: Go race detector across all API packages.
- Fresh database migration: versions 1–14 applied, `dirty=false`, 52 public tables.
- Production dependency audit: user panel 0 vulnerabilities; admin panel 0 vulnerabilities.
- Production Compose: parsed by YAML and Docker Compose validators.
- OpenAPI, Prometheus and CI YAML parsed successfully; backup/restore scripts pass `sh -n`.
- API live/readiness: PostgreSQL and Redis both `up`.
- Metrics: stable Chi route patterns are used; request IDs/path parameter values are not labels.

## Browser verification

Authenticated user-panel routes verified: Dashboard, POS, Sales, Products, Inventory,
Customers, Receivables, Suppliers, Purchases, Cashbox, Finance, Expenses, Reports,
Employees, Branches, Notifications, Security and Settings (18/18).

Authenticated platform-admin routes verified: Dashboard, Companies, Users, Plans,
Subscriptions, Payments, Support, Audit Logs and System Health (9/9).

All verified pages loaded without application error banners, login redirects, console
warnings or console errors. The production user image was isolated on port 3010 for the
browser audit because an existing local Next server owned port 3000.

## Security and operations

- Next.js upgraded from vulnerable 14.2.35 to pinned 16.3.2 with React 19.2.0.
- JWT/database secrets support Docker secret files; production database TLS is required.
- Platform-admin bootstrap is explicit by phone and unsafe historical grants are removed.
- Tenant isolation, refresh-token reuse, rate limiting and concurrent stock decrement were
  verified in earlier phase gates.
- Images run as non-root users; API and production web filesystems are read-only with tmpfs.
- Caddy TLS edge, Prometheus scrape config, CI, backup/restore and rollback runbooks are included.
