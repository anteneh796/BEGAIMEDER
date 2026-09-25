# Phase 4 — Publishing, Media & School Digital Experience

Phase 4 makes the CMS operational as a publishing and visual-storytelling system rather than a collection of CRUD endpoints.

## Publishing
- Draft, review, approved, scheduled, published and archived states remain authoritative in Laravel.
- Scheduled content/pages are published by a queueable Laravel job on the scheduler.
- Public endpoints expose only published content.
- Revision listing, revision inspection and restore APIs are available.
- Every edit creates a revision snapshot.
- Scheduled publishing has a dedicated release queue surface in the admin experience.

## Media engine
- Media assets can be uploaded asynchronously.
- Uploads are validated by MIME/type and size.
- Media processing runs through the Laravel queue.
- Image dimensions/aspect ratio are extracted without adding a heavyweight image package.
- Original media is registered as a variant source, leaving room for CDN/image-worker variants.
- Public/community/private visibility and consent states are persisted.
- Files use Laravel's filesystem abstraction, including S3-compatible configuration.

## Albums
- Album persistence and ordering.
- Cover image.
- Category and capture date.
- Album visibility/status.
- Many-to-many media ordering and captions.
- Public album API.
- CMS album management workspace.
- Public album pages.
- Public Next.js media pages consume the Laravel album API when BEGAIMEDER_API_URL is configured and safely fall back to curated local content when it is not.

## School storytelling
The platform now supports the BEGAIMEDER Moments model: a school can publish a story, attach visual assets, curate those assets into an album, schedule the release and expose the finished collection on the public site.

## Phase boundary
Phase 4 does not claim final production image transcoding/CDN processing or full analytics infrastructure. Those belong to Phase 5 production quality and infrastructure hardening.
