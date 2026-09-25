<?php
namespace App\Policies;
use App\Models\Event;
use App\Models\User;
class EventPolicy {
 public function viewAny(User $u):bool{return $u->canManage('events.create');}
 public function create(User $u):bool{return $u->canManage('events.create');}
 public function update(User $u,Event $e):bool{return $u->canManage('events.edit');}
 public function delete(User $u,Event $e):bool{return $u->canManage('events.delete');}
}