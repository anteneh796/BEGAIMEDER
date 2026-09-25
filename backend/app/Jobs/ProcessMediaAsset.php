<?php
namespace App\Jobs;
use App\Models\MediaAsset;
use App\Models\MediaVariant;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\InteractsWithQueue;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
class ProcessMediaAsset implements ShouldQueue {
 use InteractsWithQueue,Queueable,SerializesModels;
 public function __construct(public int $mediaId){}
 public function handle():void{
  $asset=MediaAsset::find($this->mediaId);if(!$asset)return;
  $asset->update(['status'=>'processing']);
  $meta=$asset->metadata??[];$meta['processed_at']=now()->toIso8601String();$meta['pipeline']='phase-4';
  if(str_starts_with((string)$asset->mime_type,'image/')){
   $full=Storage::disk($asset->disk)->path($asset->path);$size=@getimagesize($full);
   if($size){$meta['width']=$size[0];$meta['height']=$size[1];$meta['aspect_ratio']=round($size[0]/max(1,$size[1]),4);MediaVariant::updateOrCreate(['media_asset_id'=>$asset->id,'kind'=>'original'],['path'=>$asset->path,'width'=>$size[0],'height'=>$size[1],'mime_type'=>$asset->mime_type,'size'=>$asset->size]);}
  }
  $asset->update(['metadata'=>$meta,'status'=>'ready']);
 }
}