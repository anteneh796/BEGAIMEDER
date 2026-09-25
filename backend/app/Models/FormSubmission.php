<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class FormSubmission extends Model {
 protected $fillable=['type','name','email','phone','payload','status','assigned_to','notes'];
 protected $casts=['payload'=>'array'];
 public function assignee(){return $this->belongsTo(User::class,'assigned_to');}
}