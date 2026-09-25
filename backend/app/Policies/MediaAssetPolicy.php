<?php
namespace App\Policies;
use App\Models\MediaAsset;
use App\Models\User;
class MediaAssetPolicy {
 public function viewAny(User $u):bool{return $u->canManage('media.view');}
 public function create(User $u):bool{return $u->canManage('media.upload');}
 public function update(User $u,MediaAsset $m):bool{return $u->canManage('media.edit');}
 public function delete(User $u,MediaAsset $m):bool{return $u->canManage('media.delete');}
}