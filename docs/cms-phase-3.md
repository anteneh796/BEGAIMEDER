# Phase 3 — Laravel CMS Engine

Phase 3 turns the CMS from a frontend-only product surface into a Laravel-owned application boundary.

## Delivered
- Laravel 12 application scaffold under backend/
- PHP 8.2+ baseline
- MySQL, SQLite test database and Redis-ready configuration
- Sanctum personal access token authentication
- verified email requirement
- password reset API
- optional TOTP-based two-factor authentication
- API v1 namespace
- public content/page/event reads
- authenticated CMS mutations
- public contact/admission form intake
- admin users/roles/permissions/settings/audit endpoints
- role/permission matrix for seven CMS roles
- pages and reusable page blocks
- stories/news/announcements/achievements
- events
- media asset upload/metadata/visibility
- revisions and audit logs
- scheduled publication through Laravel scheduler
- database-backed queue/cache defaults with Redis configuration
- filesystem abstraction for local/public/S3-compatible storage
- rate limiting for API and authentication
- request validation and upload restrictions
- CI job that installs Composer dependencies and runs Laravel tests

## Authority model
The Laravel API is authoritative. Next.js is a presentation/editor client and must not be trusted to enforce workflow or authorization by itself.

## Production notes
Set APP_KEY, database credentials, mail credentials, storage credentials and bootstrap-admin environment values in the deployment environment. Do not commit .env files or credentials.

## Next phase
Phase 4 focuses on publishing/media experience: revision UX, scheduled publishing controls, media processing, albums, visual storytelling and full CMS-to-public-site synchronization.
