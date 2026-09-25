<?php
use Illuminate\Support\Facades\Schedule;
Schedule::job(new \App\Jobs\PublishScheduledContent)->everyMinute()->name('publish-scheduled-content')->withoutOverlapping();
Schedule::command('queue:work --stop-when-empty --tries=3')->everyMinute()->name('phase-4-queue-drain')->withoutOverlapping();
