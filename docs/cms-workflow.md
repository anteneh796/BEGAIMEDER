# CMS Workflow Contract
## Lifecycle
Draft → Review → Approved → Published or Scheduled → Archived. Archived content can be restored to Draft.

## Permissions
- Contributors create and edit their own drafts.
- Content Editors edit content and submit it for review.
- Communications Officers manage publishing content.
- Website Administrators manage pages, navigation and media.
- Super Admins can perform every workflow action.

## Revision policy
Every meaningful save creates a revision. Revisions are immutable records containing author, timestamp, status and a short summary. Publishing never overwrites revision history.

## Scheduling
Scheduled content stores an explicit publication timestamp. A future Laravel queue/scheduler will publish it automatically. The Next.js interface treats scheduling as state/data only until the Laravel API is connected.

## Audit trail
Workflow actions create audit records with actor, action, target type/id, timestamp and metadata. The UI must never expose credentials or private upload URLs.

## Laravel mapping
Future backend resources: content, content_revisions, scheduled_publications, audit_logs, users, roles, permissions. Laravel policies enforce transitions server-side; the Next.js client is never trusted for authorization.
