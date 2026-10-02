# BEGAIMEDER CMS Backend Boundary

The public experience is Next.js. The authoritative CMS backend will be Laravel.

## Responsibilities
- Authentication and session management
- Role and permission enforcement
- Content CRUD and workflow transitions
- Revision persistence
- Media upload authorization and asset metadata
- Scheduled publication
- Audit logging
- Contact/admission form persistence
- API validation and rate limiting

## Contract principle
Next.js provides the editor experience and public rendering. Laravel owns persistent state and authorization. No client-side workflow action is considered trusted.

## Planned resources
/auth, /users, /roles, /permissions, /pages, /page-blocks, /content, /revisions, /media, /albums, /events, /scheduled-publications, /audit-logs, /settings, /forms


## Local development setup

The backend requires a local `.env` file with an application encryption key. The `.env` file is intentionally ignored by Git because it contains environment-specific secrets.

From the `backend` directory on a fresh local checkout:

1. Create the local environment file: `copy .env.example .env`
2. Generate the Laravel encryption key: `php artisan key:generate`
3. Clear cached configuration: `php artisan optimize:clear`
4. Start the API: `php artisan serve`

Do not commit `.env` or a generated `APP_KEY` to GitHub. For production, set a unique `APP_KEY` in the server environment.

If an existing local `.env` already exists but `APP_KEY` is empty, only run `php artisan key:generate` followed by `php artisan optimize:clear`.
