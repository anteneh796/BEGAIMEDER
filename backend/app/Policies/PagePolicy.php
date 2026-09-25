<?php
namespace App\Policies;
use App\Models\Page;
use App\Models\User;
class PagePolicy {
 public function viewAny(User $u):bool{return $u->canManage('pages.view');}
 public function create(User $u):bool{return $u->canManage('pages.create');}
 public function update(User $u,Page $p):bool{return $u->canManage('pages.edit');}
 public function delete(User $u,Page $p):bool{return $u->canManage('pages.delete');}
 public function publish(User $u,Page $p):bool{return $u->canManage('pages.publish');}
}