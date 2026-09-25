<?php
use Illuminate\Support\Facades\Schedule;
Schedule::call(function(){
 \App\Models\Content::where('status','scheduled')->whereNotNull('scheduled_for')->where('scheduled_for','<=',now())->update(['status'=>'published','published_at'=>now(),'scheduled_for'=>null]);
 \App\Models\Page::where('status','scheduled')->whereNotNull('scheduled_for')->where('scheduled_for','<=',now())->update(['status'=>'published','published_at'=>now(),'scheduled_for'=>null]);
})->everyMinute()->name('publish-scheduled-content')->withoutOverlapping();
