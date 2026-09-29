<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model; use Illuminate\Support\Facades\Storage;
class MediaAsset extends Model {
 protected $fillable=['title','type','disk','path','mime_type','size','visibility','status','alt_text','caption','consent_status','metadata','uploaded_by','focal_x','focal_y'];
 protected $casts=['metadata'=>'array','focal_x'=>'float','focal_y'=>'float']; protected $appends=['public_url','thumbnail_url'];
 public function getPublicUrlAttribute():?string{return Storage::disk($this->disk)->url($this->path);}
 public function getThumbnailUrlAttribute():?string{$variant=$this->relationLoaded('variants')?$this->variants->firstWhere('kind','thumbnail'):MediaVariant::where('media_asset_id',$this->id)->where('kind','thumbnail')->first();return $variant?Storage::disk($variant->disk??$this->disk)->url($variant->path):$this->public_url;}
 public function variants(){return $this->hasMany(MediaVariant::class);}
 public function uploader(){return $this->belongsTo(User::class,'uploaded_by');}
}