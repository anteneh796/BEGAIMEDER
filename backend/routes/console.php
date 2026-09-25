<?php
use Illuminate\Support\Facades\Schedule;
Schedule::job(new \App\Jobs\PublishScheduledContent)->everyMinute()->name('publish-scheduled-content')->withoutOverlapping();
