<?php
namespace App\Policies;
use App\Models\Content;
use App\Models\User;
class ContentPolicy {
 public function viewAny(User $u):bool{return $u->canManage('content.review');}
 public function create(User $u):bool{return $u->canManage('content.create');}
 public function update(User $u,Content $c):bool{return $u->canManage('content.edit');}
 public function delete(User $u,Content $c):bool{return $u->canManage('content.delete');}
 public function publish(User $u,Content $c):bool{return $u->canManage('content.publish');}
}