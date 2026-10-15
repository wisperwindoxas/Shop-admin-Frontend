# BUSINESS ERP SaaS — Phase 0 Architecture

Status: approved baseline for implementation  
Architecture: modular monolith  
API prefix: `/api/v1`  
Business UI prefix: `/app`  
Platform UI prefix: `/admin`

## 1. Architecture

The system is a modular monolith with one deployable Go API and one Next.js web application. Business modules have strict ownership of their tables and expose behavior through services. Cross-module changes happen through application services inside one PostgreSQL transaction. Redis is auxiliary and never the financial source of truth.

```text
Browser
  └─ Next.js Web
       ├─ /app/*   business tenant UI
       └─ /admin/* platform super-admin UI
             │ HTTPS JSON REST
             ▼
Go API /api/v1
  ├─ middleware: request-id, recovery, logging, security, auth, tenant, RBAC
  ├─ business modules
  ├─ platform modules
  └─ background jobs
       ├─ PostgreSQL: authoritative data and ledgers
       ├─ Redis: rate limits, short cache, distributed locks where justified
       └─ object storage: product/file uploads
```

Rules:

- HTTP handlers only map transport DTOs and errors.
- Services own business rules and transaction boundaries.
- Repositories only perform tenant-scoped data access.
- Modules do not query another module's private tables from handlers.
- Money uses `int64`/PostgreSQL `BIGINT` in UZS.
- Quantity uses PostgreSQL `NUMERIC(18,3)` and a fixed decimal representation in Go.
- Ledger rows are append-only; corrections use compensating entries.
- No critical workflow depends on frontend-calculated totals.

## 2. Target folder tree

```text
business-erp/
├── apps/
│   ├── api/
│   │   ├── cmd/api/main.go
│   │   ├── internal/
│   │   │   ├── config/
│   │   │   ├── database/
│   │   │   ├── middleware/
│   │   │   ├── auth/ tenant/ rbac/
│   │   │   ├── companies/ branches/ warehouses/ cashboxes/
│   │   │   ├── users/ products/ categories/ inventory/
│   │   │   ├── sales/ returns/ orders/
│   │   │   ├── customers/ debts/ suppliers/ purchases/
│   │   │   ├── finance/ expenses/ employees/ reports/
│   │   │   ├── notifications/ subscriptions/
│   │   │   ├── platformadmin/ support/ audit/ storage/ health/
│   │   │   └── shared/{errors,httpx,validation,clock,ids}/
│   │   ├── migrations/
│   │   ├── queries/
│   │   ├── sqlc.yaml
│   │   └── Dockerfile
│   └── web/
│       ├── app/
│       │   ├── (auth)/login/
│       │   ├── (business)/app/{dashboard,pos,sales,returns,orders,products,categories,inventory,receipts,transfers,inventory-counts,customers,debts,suppliers,purchases,cashboxes,finance,expenses,employees,branches,reports,notifications,settings}/
│       │   └── (platform)/admin/{dashboard,companies,users,plans,subscriptions,payments,support,notifications,reports,audit-logs,system-health,settings}/
│       ├── components/{ui,business,admin}/
│       ├── features/
│       ├── lib/{api,auth,query,format,validation}/
│       ├── types/
│       └── Dockerfile
├── packages/
│   ├── shared-types/
│   └── config/
├── deploy/
├── docs/
├── scripts/
├── docker-compose.yml
├── Makefile
├── README.md
└── .env.example
```

Each backend domain module may contain `handler.go`, `service.go`, `repository.go`, `model.go`, `dto.go`, `routes.go`, and focused tests. Files are added only when the module needs them.

## 3. Database entities

### Identity and tenancy

- `companies`: tenant lifecycle, legal identity, subscription state.
- `company_settings`: currency, timezone, receipt and stock policies.
- `users`: global identity, phone, password hash, active state.
- `memberships`: user-to-company membership and lifecycle.
- `roles`, `permissions`, `role_permissions`, `user_roles`: tenant RBAC.
- `user_branch_access`: branch scope restriction.
- `sessions`, `refresh_tokens`: session chain and rotation/revocation.
- `security_events`, `login_history`: authentication security trail.

### Organization

- `branches`: tenant branches.
- `warehouses`: tenant warehouses optionally attached to a branch.
- `cashboxes`: tenant cashboxes attached to a branch.
- `employees`: tenant employment record linked optionally to a user.

### Catalog and inventory

- `categories`, `units`, `products`, `product_prices`.
- `warehouse_stocks`: locked materialized stock balance and weighted average cost.
- `inventory_movements`: immutable inventory ledger.
- `transfers`, `transfer_items`.
- `inventory_counts`, `inventory_count_items`.
- `files`: tenant-owned attachments and product media.

### Sales and customers

- `customers`, `customer_orders`, `customer_order_items`.
- `sales`, `sale_items`, `sale_payments`, `sales_idempotency`.
- `returns`, `return_items`.
- `receivables`, `debt_payments`.

### Purchasing and suppliers

- `suppliers`.
- `purchase_orders`, `purchase_order_items`.
- `purchase_receipts`, `purchase_receipt_items`.
- `payables`, `supplier_payments`.

### Finance

- `cash_transactions`: immutable cash ledger.
- `expense_categories`, `expenses`.

### Platform

- `plans`, `subscriptions`, `platform_payments`.
- `support_tickets`, `support_messages`.
- `notifications`, `platform_notifications`.
- `audit_logs`.

All tenant tables have a non-null `company_id`. Mutable master tables have `created_at`, `updated_at`, and where justified `deleted_at`. Ledger and transaction rows are never silently edited or soft-deleted.

## 4. ER relationships and invariants

```text
users ──< memberships >── companies
memberships ──< user_roles >── roles ──< role_permissions >── permissions
companies ──< branches ──< warehouses
companies ──< branches ──< cashboxes
companies ──< products >── categories / units
warehouses + products ──< warehouse_stocks
warehouses + products ──< inventory_movements
customers ──< sales ──< sale_items >── products
sales ──< sale_payments
sales ──< returns ──< return_items
customers ──< receivables ──< debt_payments
suppliers ──< purchase_orders ──< purchase_order_items
purchase_orders ──< purchase_receipts ──< purchase_receipt_items
suppliers ──< payables ──< supplier_payments
cashboxes ──< cash_transactions
```

Mandatory invariants:

- Every cross-tenant FK is enforced with a composite key containing `company_id` or validated under a transaction before mutation.
- `(company_id, sku)` and `(company_id, barcode)` are unique for non-deleted products.
- Receipt numbers are unique per company, not globally.
- Quantities and money inputs have explicit positive/non-negative constraints by operation.
- `warehouse_stocks.quantity` equals the sum of confirmed inventory movements.
- Cashbox balance equals the sum of immutable cash transactions; any cached balance is updated atomically.
- Receivable remaining amount equals original minus confirmed debt payments and adjustments.
- Sale payment total equals payable total unless the remainder is represented by a receivable.
- Status columns use constrained enums/checks and legal transition guards.

## 5. Roles

| Role | Scope | Purpose |
|---|---|---|
| OWNER | company | Full business control; protected from accidental removal |
| ADMIN | company | Operational administration except owner-only/security actions |
| MANAGER | assigned branches | Sales, catalog, customers, operational reports |
| CASHIER | assigned branches/cashboxes | POS, permitted returns, own shift/cashbox |
| WAREHOUSE_MANAGER | assigned warehouses | Receipts, transfers, counts, inventory |
| ACCOUNTANT | company/assigned branches | Cash, expenses, debts, supplier payments, finance reports |
| SUPER_ADMIN | platform | SaaS operations only; no implicit business membership |

Custom tenant roles are allowed. System roles provide immutable default permission templates; tenant admins may create scoped roles without granting owner-only permissions.

## 6. Permission catalog

```text
dashboard.view
sales.read sales.create sales.discount sales.return sales.export
products.read products.create products.update products.archive products.manage_price
categories.manage
inventory.read inventory.adjust inventory.transfer inventory.count
purchases.read purchases.create purchases.confirm purchases.cancel
suppliers.read suppliers.manage suppliers.pay
customers.read customers.manage
debts.read debts.collect debts.adjust
cashboxes.read cashboxes.manage cashboxes.open cashboxes.close
expenses.read expenses.create expenses.approve
employees.read employees.manage
branches.read branches.manage warehouses.manage
reports.sales reports.profit reports.inventory reports.debts reports.expenses reports.export
settings.company settings.receipt settings.security
users.read users.invite users.manage
roles.read roles.manage
notifications.read notifications.manage
```

Platform permissions are separate: `platform.dashboard`, `platform.companies`, `platform.users`, `platform.plans`, `platform.subscriptions`, `platform.payments`, `platform.support`, `platform.notifications`, `platform.reports`, `platform.audit`, `platform.health`, `platform.impersonate`.

Authorization order is: valid session → active user → active membership/company → permission → branch/warehouse/cashbox scope → resource tenant ownership.

## 7. Frontend route map

### Public/auth

- `/login`, `/forgot-password`, `/reset-password`.

### Business

- `/app/dashboard`, `/app/pos`, `/app/sales`, `/app/sales/[id]`, `/app/returns`.
- `/app/orders`, `/app/products`, `/app/products/new`, `/app/products/[id]`, `/app/categories`.
- `/app/inventory`, `/app/inventory/movements`, `/app/receipts`, `/app/receipts/[id]`.
- `/app/transfers`, `/app/transfers/[id]`, `/app/inventory-counts`, `/app/inventory-counts/[id]`.
- `/app/customers`, `/app/customers/[id]`, `/app/debts`.
- `/app/suppliers`, `/app/suppliers/[id]`, `/app/purchases`, `/app/purchases/[id]`.
- `/app/cashboxes`, `/app/finance`, `/app/expenses`.
- `/app/employees`, `/app/branches`, `/app/reports`, `/app/notifications`, `/app/settings`.

### Platform

- `/admin/dashboard`, `/admin/companies`, `/admin/companies/[id]`.
- `/admin/users`, `/admin/plans`, `/admin/subscriptions`, `/admin/payments`.
- `/admin/support`, `/admin/support/[id]`, `/admin/notifications`, `/admin/reports`.
- `/admin/audit-logs`, `/admin/system-health`, `/admin/settings`.

Route guards never replace API authorization. Unauthorized routes render a permission-denied state and do not prefetch protected data.

## 8. API map

Standard response envelope is `{success,data,meta}` or `{success:false,error:{code,message,fields}}`. Collections support `page`, `limit`, `sort`, and documented filters.

### Authentication and identity

- `POST /auth/login`, `POST /auth/refresh`, `POST /auth/logout`, `GET /auth/me`.
- `GET /sessions`, `DELETE /sessions/:id`.
- `GET/POST/PATCH /users`, `GET/POST/PATCH /roles`.

### Organization and catalog

- CRUD `/branches`, `/warehouses`, `/cashboxes`, `/products`, `/categories`, `/units`.

### Inventory and purchasing

- `GET /inventory`, `GET /inventory/movements`.
- CRUD `/purchase-orders`; `POST /purchase-orders/:id/approve`.
- CRUD `/receipts`; `POST /receipts/:id/confirm` and `/cancel`.
- CRUD `/transfers`; `POST /transfers/:id/send`, `/receive`, `/cancel`.
- CRUD `/inventory-counts`; `POST /inventory-counts/:id/finalize`.

### Sales, customers, and debts

- `GET/POST /sales`, `GET /sales/:id`, `POST /sales/:id/returns`.
- CRUD `/customer-orders`.
- CRUD `/customers`, CRUD `/suppliers`.
- `GET /receivables`, `POST /receivables/:id/payments`.
- `GET /payables`, `POST /payables/:id/payments`.

### Finance and reporting

- `GET /cash-transactions`.
- `GET/POST/PATCH /expenses`; `POST /expenses/:id/approve`, `/cancel`.
- `/reports/sales`, `/profit`, `/inventory`, `/debts`, `/expenses`.

### Platform

- `/admin/companies`, `/admin/users`, `/admin/plans`, `/admin/subscriptions`.
- `/admin/payments`, `/admin/support`, `/admin/notifications`, `/admin/reports`.
- `/admin/audit-logs`, `/admin/system-health`.
- `POST /admin/companies/:id/suspend`, `/activate`, `/impersonation-sessions`.

All mutating financial endpoints accept an `Idempotency-Key`; operations with external side effects require it.

## 9. Business state machines

| Aggregate | States and legal transitions |
|---|---|
| Company | `TRIAL → ACTIVE → SUSPENDED → ACTIVE`; terminal `CLOSED` |
| Membership | `INVITED → ACTIVE → SUSPENDED/REVOKED` |
| Purchase order | `DRAFT → APPROVED → PARTIALLY_RECEIVED → RECEIVED`; `DRAFT/APPROVED → CANCELLED` |
| Purchase receipt | `DRAFT → CONFIRMED`; `DRAFT → CANCELLED` |
| Transfer | `DRAFT → SENT → RECEIVED`; `DRAFT → CANCELLED` |
| Inventory count | `DRAFT → COUNTING → FINALIZED`; pre-final states may cancel |
| Sale | atomically created as `COMPLETED`; `COMPLETED → PARTIALLY_RETURNED → RETURNED` |
| Return | `DRAFT → COMPLETED`; draft may cancel |
| Receivable/payable | `OPEN → PARTIALLY_PAID → PAID`; overdue is derived or scheduled |
| Expense | `DRAFT → APPROVED`; `DRAFT → CANCELLED`, approved reversed by compensating entry |
| Subscription | `TRIAL → ACTIVE → PAST_DUE → SUSPENDED/CANCELLED`; renewable to `ACTIVE` |
| Support ticket | `OPEN → IN_PROGRESS → WAITING_CUSTOMER → RESOLVED → CLOSED` |

State changes are service methods with permission, invariant, version, audit, and transaction checks—not arbitrary PATCHes.

## 10. Transaction boundaries

| Operation | Atomic writes and locks |
|---|---|
| Sale finalization | Lock idempotency key and stock rows; validate price/stock; insert sale/items/payments; inventory ledger; cash ledger or receivable; stock snapshot; audit |
| Sale return | Lock sale/returnable quantities/stock/cash; return/items; inventory reversal; refund or receivable adjustment; audit |
| Receipt confirmation | Lock receipt/products/stocks; enforce state; calculate weighted cost; inventory movements; stock snapshot; payable; audit |
| Transfer send | Lock source stock; OUT/transit movements; state transition; audit |
| Transfer receive | Lock transfer/destination stock; IN movements; snapshots; state transition; audit |
| Inventory count finalize | Lock count and stock; adjustment movements; snapshots; audit |
| Debt payment | Lock receivable and cashbox; debt payment; remaining/status; cash ledger; audit |
| Supplier payment | Lock payable and cashbox; payment; remaining/status; cash ledger; audit |
| Expense approval | Lock expense/cashbox; status; cash OUT; cached balance; audit |

Transactions use request context and explicit isolation appropriate to the invariant. Locked resources are acquired in a deterministic order to reduce deadlocks. Commit errors are returned; after-commit notifications are queued through an outbox/job mechanism.

## 11. Multi-tenant strategy

- The authenticated session determines the active `company_id`; request bodies cannot select an arbitrary tenant.
- Every tenant repository method requires a tenant scope argument.
- Every tenant query includes `company_id`; detail/update/delete queries include both resource ID and tenant ID.
- Composite keys/FKs prevent cross-tenant references in the schema.
- Platform queries use a separate admin repository and require platform permissions.
- Background jobs carry an explicit tenant ID and revalidate company status.
- Cache keys include tenant ID and relevant branch/user scope.
- Object storage paths begin with tenant ID; signed access validates ownership.
- Audit rows store actor, effective tenant, impersonator, action, resource, request ID, IP, and sanitized before/after metadata.
- Integration tests attempt IDOR across two tenants for every resource family.
- Optional PostgreSQL RLS is defense-in-depth, not a substitute for scoped repositories.

## 12. Security strategy

- Argon2id hashes with versioned parameters and rehash-on-login policy.
- Short-lived signed access tokens; rotated opaque refresh tokens stored as hashes.
- Refresh-token families detect reuse and revoke the full family.
- Server-side sessions allow device listing and revocation.
- Required `JWT_SECRET`/key material; startup fails on insecure production configuration.
- Login rate limits by IP and normalized phone; exponential backoff and security events.
- Exact CORS allowlist, secure headers, request/body limits, JSON content-type enforcement.
- Central validation and stable error codes; SQL is parameterized through sqlc/pgx.
- CSRF protection if refresh tokens use cookies; cookies are `HttpOnly`, `Secure`, `SameSite`.
- Permission and resource scope checks live in backend services/middleware.
- Request IDs and structured logs; passwords, tokens, secrets, and sensitive bodies are never logged.
- File type is validated from content, size is limited, filename is generated, and access is tenant-scoped.
- Impersonation requires a reason, short expiry, prominent UI banner, no credential/security mutations, and complete audit trail.
- Dependency, SAST, migration, backup-restore, and penetration checks are release gates.

## 13. POS flow

1. Client loads sellable products and server-authoritative prices for the active branch/warehouse.
2. Cart calculations are previews only.
3. Cashier selects customer, discount, and one or more payment methods.
4. Client validates UX fields and sends product IDs, quantities, requested discount, payments, and an idempotency key.
5. API authenticates session, tenant, `sales.create`, branch, warehouse, and cashbox access.
6. Service locks idempotency and stock rows in deterministic product order.
7. Server reloads products/prices, authorizes discount, computes totals, and checks stock.
8. In one transaction it creates sale/items with COGS snapshots, stock movements/snapshots, payments, cash entries, receivable if necessary, and audit log.
9. Duplicate idempotency requests return the original result.
10. Client receives the committed receipt payload and prints only server-returned values.

Offline POS is not part of the initial implementation unless a separate conflict and synchronization design is approved.

## 14. Inventory flow

- `inventory_movements` is the immutable source of history; `warehouse_stocks` is the lockable current snapshot.
- Each stock-changing service locks `(company_id, warehouse_id, product_id)` rows.
- Purchase receipt `IN` recalculates weighted average cost:
  `(old_qty × old_cost + received_qty × received_cost) / new_qty`.
- Sale `OUT` records the current weighted cost as COGS snapshot.
- Return `IN` uses the original sale COGS snapshot.
- Transfer creates source `TRANSFER_OUT` when sent and destination `TRANSFER_IN` when received; in-transit quantity remains reconcilable.
- Count finalization creates adjustment movements; it never overwrites history.
- Negative stock is denied by default and can only be enabled by an audited company policy.
- Reconciliation jobs compare snapshots to ledger totals and raise alerts without silently correcting values.

## 15. Financial flow

- `cash_transactions` is append-only and uses `IN`/`OUT` plus a unique business reference.
- Cash sales create `IN`; cash refunds create `OUT`; expenses and supplier payments create `OUT`; debt collections create `IN`.
- Card/provider payments are represented separately and do not increase a physical cashbox unless configured to a settlement account.
- Credit sales create receivables for the unpaid remainder.
- Purchase receipts create payables unless prepaid/settled by an explicit supplier payment.
- Partial payments update remaining amounts under row lock.
- Corrections use reversal entries, not destructive updates.
- Profit is derived from net revenue minus COGS minus operating expenses; returns reverse revenue and COGS.
- Reports filter by tenant, branch, timezone-aware period, and transaction status.
- Daily reconciliation compares cash ledger, cached balance, sales payments, refunds, expenses, and debt/supplier payments.

## 16. Platform admin architecture

- Platform admin is a separate route group and authorization realm.
- `SUPER_ADMIN` is not stored as a tenant role and receives no automatic access to company data.
- Platform modules own companies, plans, subscriptions, platform payments, support, platform notifications, audit search, and health aggregation.
- Company suspension blocks new tenant sessions and mutations while preserving data and controlled read/export access.
- Plan enforcement occurs in backend policy checks, never only through hidden UI.
- Subscription transitions and payment callbacks are idempotent and audited.
- Support agents see only required metadata unless audited impersonation is explicitly started.
- System health exposes sanitized dependency status, latency, queue depth, migration version, and job health—not secrets.
- Platform dashboards use aggregated/read-model queries and never perform business mutations.
- Every admin mutation records actor, reason, target, request ID, and before/after state.

## Implementation gates

No phase may be marked complete unless its migrations, backend, frontend, permissions, validation, tests, and relevant documentation pass together. Existing prototype routes may be used as visual references but are not considered implemented features until they use authenticated server APIs and pass the critical flow tests.

Phase 1 must begin by restructuring without losing the current work, establishing build/test commands, migration tooling, configuration validation, health checks, structured logging, Docker services, and a clean baseline before authentication work starts.
