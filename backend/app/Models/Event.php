<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Event extends Model {
 protected $fillable=['title','slug','excerpt','description','starts_at','ends_at','location','status','featured','seo','created_by'];
 protected $casts=['starts_at'=>'datetime','ends_at'=>'datetime','featured'=>'boolean','seo'=>'array'];
 public function creator(){return $this->belongsTo(User::class,'created_by');}
}