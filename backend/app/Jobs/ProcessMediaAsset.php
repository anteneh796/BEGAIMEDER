<?php
namespace App\Jobs;
use App\Models\MediaAsset; use App\Models\MediaVariant; use Illuminate\Contracts\Queue\ShouldQueue; use Illuminate\Bus\Queueable; use Illuminate\Queue\SerializesModels; use Illuminate\Support\Facades\Storage;
class ProcessMediaAsset implements ShouldQueue {
 use Queueable,SerializesModels;
 public function __construct(public int $mediaId){}
 public function handle():void{
  $asset=MediaAsset::find($this->mediaId); if(!$asset)return;
  $asset->update(['status'=>'processing']); $meta=$asset->metadata??[]; $meta['processed_at']=now()->toIso8601String(); $meta['pipeline']='phase-7-media';
  if($asset->type==='image'){
   $disk=Storage::disk($asset->disk); $source=$disk->path($asset->path); $size=@getimagesize($source);
   if($size){$meta['width']=$size[0];$meta['height']=$size[1];$meta['aspect_ratio']=round($size[0]/max(1,$size[1]),4);MediaVariant::updateOrCreate(['media_asset_id'=>$asset->id,'kind'=>'original'],['path'=>$asset->path,'width'=>$size[0],'height'=>$size[1],'mime_type'=>$asset->mime_type,'size'=>$asset->size]);$this->thumbnail($asset,$disk,$size[0],$size[1]);}
  }
  $asset->update(['metadata'=>$meta,'status'=>'ready']);
 }
 private function thumbnail(MediaAsset $asset,$disk,int $width,int $height):void{
  $path=$disk->path($asset->path); $src=false;
  if($asset->mime_type==='image/jpeg')$src=@imagecreatefromjpeg($path);
  elseif($asset->mime_type==='image/png')$src=@imagecreatefrompng($path);
  elseif($asset->mime_type==='image/webp'&&function_exists('imagecreatefromwebp'))$src=@imagecreatefromwebp($path);
  if(!$src)return;
  $max=640;$scale=min(1,$max/max($width,$height));$tw=max(1,(int)round($width*$scale));$th=max(1,(int)round($height*$scale));$dst=imagecreatetruecolor($tw,$th);imagealphablending($dst,false);imagesavealpha($dst,true);imagecopyresampled($dst,$src,0,0,0,0,$tw,$th,$width,$height);
  ob_start();imagejpeg($dst,null,84);$jpg=(string)ob_get_clean();$out='media/thumbs/'.$asset->id.'.jpg';$disk->put($out,$jpg);imagedestroy($src);imagedestroy($dst);
  MediaVariant::updateOrCreate(['media_asset_id'=>$asset->id,'kind'=>'thumbnail'],['path'=>$out,'width'=>$tw,'height'=>$th,'mime_type'=>'image/jpeg','size'=>$disk->size($out)]);
 }
}