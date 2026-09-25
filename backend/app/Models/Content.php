<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Content extends Model {
 protected $fillable=['type','title','slug','excerpt','body','status','author_id','reviewer_id','published_at','scheduled_for','seo','featured'];
 protected $casts=['seo'=>'array','featured'=>'boolean','published_at'=>'datetime','scheduled_for'=>'datetime'];
 public function author(){return $this->belongsTo(User::class,'author_id');}
 public function reviewer(){return $this->belongsTo(User::class,'reviewer_id');}
 public function revisions(){return $this->morphMany(Revision::class,'revisionable');}
}