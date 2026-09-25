<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class MediaAsset extends Model {
 protected $fillable=['title','type','disk','path','mime_type','size','visibility','status','alt_text','caption','consent_status','metadata','uploaded_by'];
 protected $casts=['metadata'=>'array'];
 protected $appends=['public_url'];
 public function uploader(){return $this->belongsTo(User::class,'uploaded_by');}
}