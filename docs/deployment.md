# Production deployment and operations

## Release procedure

1. Run `make check` and `make test-race` on the release commit.
2. Build and scan immutable API, business-web and admin-web images. Tag them with the commit SHA, never `latest`.
3. Copy `.env.production.example` to the secret manager/deployment host and supply all required values.
4. Create all files declared under `secrets:` in `docker-compose.prod.yml` with mode `0600`: PostgreSQL and Redis passwords, a JWT secret of at least 32 random bytes, a PostgreSQL TLS certificate/private key, and `database_url`. The URL must address the `postgres` service and enable TLS, for example `sslmode=require`.
5. Run a database backup and verify its SHA-256 file.
6. Run `docker compose -f docker-compose.prod.yml --profile tools run --rm migrate` once.
7. Start application services with `docker compose -f docker-compose.prod.yml up -d`.
8. Wait for `/api/v1/health/ready`, then smoke-test login, dashboard, product list and a non-financial read endpoint.

## Rollback

- Roll application images back to the previous immutable tags first.
- Do not automatically migrate the database down. Schema changes are forward-compatible for one release whenever possible.
- A database restore is the last resort and requires a maintenance window plus `CONFIRM_RESTORE=RESTORE`.

## Backup and restore

The backup script creates a PostgreSQL custom-format dump and SHA-256 checksum:

```sh
DATABASE_URL='postgres://...' BACKUP_DIR=/srv/backups sh scripts/backup.sh
```

Copy backups to encrypted off-site object storage. Recommended policy: daily for 14 days, weekly for 8 weeks, monthly for 12 months. Quarterly restore drills are mandatory.

Restore only into a validated target:

```sh
DATABASE_URL='postgres://...' BACKUP_FILE=/srv/backups/business-erp-...dump \
CONFIRM_RESTORE=RESTORE sh scripts/restore.sh
```

Target RPO: 24 hours with daily dumps; enable WAL archiving for a stricter RPO. Target RTO: 2 hours, verified by restore drills.

## Monitoring and alerts

Prometheus scrapes `/metrics` every 15 seconds. Also monitor:

- readiness failures for 2 consecutive minutes;
- HTTP 5xx rate above 2% for 5 minutes;
- p95 request latency above 1 second for 10 minutes;
- PostgreSQL storage above 80%, connection saturation above 80%, replication/WAL lag;
- Redis memory above 80% or persistence failures;
- failed login/rate-limit spikes;
- backup age above 26 hours and checksum/restore-drill failures;
- subscriptions/payment webhook failures when a provider is enabled.

Logs are structured JSON and must be shipped to centralized retention. Redact authorization headers and secrets at the collector.

## Secret rotation

- Rotate database/Redis credentials through the secret manager and perform a rolling restart.
- JWT rotation currently invalidates active access tokens; schedule it and revoke sessions if compromise is suspected.
- Change `PLATFORM_ADMIN_PHONE` only through an audited operator change.

## Incident response

1. Put Caddy/API into maintenance mode or isolate affected routes.
2. Preserve logs and database evidence; do not delete ledger/security records.
3. Revoke affected sessions and platform-admin grants.
4. Rotate exposed credentials.
5. Restore service, verify tenant isolation and financial invariants, then document root cause and corrective actions.
