<?php
namespace App\Jobs;
use App\Models\Content;
use App\Models\Page;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
class PublishScheduledContent implements ShouldQueue {
 use InteractsWithQueue,Queueable,SerializesModels;
 public function handle():void{Content::where('status','scheduled')->where('scheduled_for','<=',now())->update(['status'=>'published','published_at'=>now(),'scheduled_for'=>null]);Page::where('status','scheduled')->where('scheduled_for','<=',now())->update(['status'=>'published','published_at'=>now(),'scheduled_for'=>null]);}
}