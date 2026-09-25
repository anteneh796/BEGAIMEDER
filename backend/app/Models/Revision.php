<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Revision extends Model {
 protected $fillable=['revisionable_type','revisionable_id','version','snapshot','created_by','change_summary'];
 protected $casts=['snapshot'=>'array'];
 public function revisionable(){return $this->morphTo();}
 public function creator(){return $this->belongsTo(User::class,'created_by');}
}