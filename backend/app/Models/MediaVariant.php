<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class MediaVariant extends Model { protected $fillable=['media_asset_id','kind','path','width','height','mime_type','size']; public function asset(){return $this->belongsTo(MediaAsset::class,'media_asset_id');} }