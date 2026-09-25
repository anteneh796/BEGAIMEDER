<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class MediaAlbum extends Model {
 protected $fillable=['title','slug','description','cover_media_id','category','captured_at','visibility','status','created_by'];
 protected $casts=['captured_at'=>'datetime'];
 public function cover(){return $this->belongsTo(MediaAsset::class,'cover_media_id');}
 public function media(){return $this->belongsToMany(MediaAsset::class,'album_media')->withPivot('sort_order','caption')->orderBy('pivot_sort_order');}
 public function creator(){return $this->belongsTo(User::class,'created_by');}
}