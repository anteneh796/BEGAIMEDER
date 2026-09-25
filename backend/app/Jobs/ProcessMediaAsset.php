<?php
namespace App\Jobs;
use App\Models\MediaAsset;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\InteractsWithQueue;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
class ProcessMediaAsset implements ShouldQueue {
 use InteractsWithQueue,Queueable,SerializesModels;
 public function __construct(public int $mediaId){}
 public function handle():void{$asset=MediaAsset::find($this->mediaId);if(!$asset)return;$asset->update(['status'=>'processing']);$meta=$asset->metadata??[];$meta['processed_at']=now()->toIso8601String();$meta['pipeline']='phase-4';$asset->update(['metadata'=>$meta,'status'=>'ready']);}
}