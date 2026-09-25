<?php
namespace Database\Seeders;
use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;
class DatabaseSeeder extends Seeder {
 public function run():void{
  $permissions=['pages.view','pages.create','pages.edit','pages.delete','pages.publish','content.create','content.edit','content.delete','content.publish','content.review','media.view','media.upload','media.edit','media.delete','events.create','events.edit','events.delete','users.manage','roles.manage','settings.manage','audit.view'];
  foreach($permissions as $slug) Permission::firstOrCreate(['slug'=>$slug],['name'=>ucwords(str_replace(['.','-'],' ',$slug))]);
  $matrix=['super-admin'=>$permissions,'website-administrator'=>array_values(array_diff($permissions,['roles.manage'])),'content-editor'=>['pages.view','pages.create','pages.edit','content.create','content.edit','content.review','content.publish','media.view','media.upload','media.edit','events.create','events.edit'],'media-manager'=>['media.view','media.upload','media.edit','media.delete'],'admissions-officer'=>[],'communications-officer'=>['content.create','content.edit','content.publish','events.create','events.edit','media.view','media.upload'],'contributor'=>['pages.view','content.create','content.edit','media.view']];
  foreach($matrix as $slug=>$slugs){$role=Role::firstOrCreate(['slug'=>$slug],['name'=>ucwords(str_replace('-',' ',$slug))]);$role->permissions()->sync(Permission::whereIn('slug',$slugs)->pluck('id'));}
 }
}