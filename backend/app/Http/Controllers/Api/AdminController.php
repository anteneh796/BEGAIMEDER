<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\AuditLog;
use App\Models\Permission;
use App\Models\Role;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Http\Request;
class AdminController extends Controller {
 public function users(Request $r){abort_unless($r->user()->canManage('users.manage'),403);return response()->json(User::with('roles')->latest()->paginate(30));}
 public function roles(Request $r){abort_unless($r->user()->canManage('roles.manage'),403);return response()->json(Role::with('permissions')->orderBy('name')->get());}
 public function permissions(Request $r){abort_unless($r->user()->canManage('roles.manage'),403);return response()->json(Permission::orderBy('slug')->get());}
 public function settings(Request $r){abort_unless($r->user()->canManage('settings.manage'),403);return response()->json(Setting::orderBy('group')->orderBy('key')->get());}
 public function updateSetting(Request $r,string $key){abort_unless($r->user()->canManage('settings.manage'),403);$d=$r->validate(['value'=>'nullable','group'=>'nullable|string|max:100','is_public'=>'boolean']);$s=Setting::updateOrCreate(['key'=>$key],$d+['group'=>$d['group']??'general']);return response()->json($s);}
 public function audit(Request $r){abort_unless($r->user()->canManage('audit.view'),403);return response()->json(AuditLog::with('user')->latest()->paginate(50));}
}