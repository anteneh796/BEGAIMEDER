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
