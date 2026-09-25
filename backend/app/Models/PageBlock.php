<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class PageBlock extends Model {
 protected $fillable=['page_id','type','sort_order','data','is_visible'];
 protected $casts=['data'=>'array','is_visible'=>'boolean'];
 public function page(){return $this->belongsTo(Page::class);}
}