<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class PageView extends Model { protected $fillable=['path','referrer','ip_hash','user_agent']; }