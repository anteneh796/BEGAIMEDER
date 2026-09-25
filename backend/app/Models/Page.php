<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Page extends Model {
 protected $fillable=['title','slug','status','template','seo','author_id','published_at','scheduled_for'];
 protected $casts=['seo'=>'array','published_at'=>'datetime','scheduled_for'=>'datetime'];
 public function blocks(){return $this->hasMany(PageBlock::class)->orderBy('sort_order');}
 public function author(){return $this->belongsTo(User::class,'author_id');}
 public function revisions(){return $this->morphMany(Revision::class,'revisionable');}
}