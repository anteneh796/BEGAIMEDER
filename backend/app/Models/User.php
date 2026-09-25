<?php
namespace App\Models;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
class User extends Authenticatable implements MustVerifyEmail {
 use HasApiTokens,HasFactory,Notifiable;
 protected $fillable=['name','email','password','is_active','two_factor_enabled','two_factor_secret','two_factor_confirmed_at'];
 protected $hidden=['password','remember_token','two_factor_secret'];
 protected function casts():array{return ['email_verified_at'=>'datetime','password'=>'hashed','is_active'=>'boolean','two_factor_enabled'=>'boolean','two_factor_confirmed_at'=>'datetime'];}
 public function roles(){return $this->belongsToMany(Role::class);}
 public function auditLogs(){return $this->hasMany(AuditLog::class);}
 public function revisions(){return $this->hasMany(Revision::class,'created_by');}
 public function hasRole(string $role):bool{return $this->roles()->where('slug',$role)->exists();}
 public function hasPermission(string $permission):bool{return $this->roles()->whereHas('permissions',fn($q)=>$q->where('slug',$permission))->exists();}
 public function canManage(string $permission):bool{return $this->is_active && $this->hasPermission($permission);}
}