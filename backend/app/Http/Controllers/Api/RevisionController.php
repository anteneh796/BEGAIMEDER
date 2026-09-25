<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Content;
use App\Models\Page;
use App\Models\Revision;
use Illuminate\Http\Request;
class RevisionController extends Controller {
 public function index(Request $r,string $type,int $id){$permission=$type==='pages'?'pages.edit':'content.edit';abort_unless($r->user()->canManage($permission),403);$model=$type==='pages'?Page::findOrFail($id):Content::findOrFail($id);return response()->json($model->revisions()->with('creator')->latest('version')->get());}
 public function show(Request $r,Revision $revision){abort_unless($r->user()->canManage('content.edit'),403);return response()->json($revision->load('creator'));}
 public function restore(Request $r,Revision $revision){abort_unless($r->user()->canManage('content.edit'),403);$model=$revision->revisionable;abort_unless($model,404);$snapshot=$revision->snapshot;unset($snapshot['id'],$snapshot['created_at'],$snapshot['updated_at']);$model->fill($snapshot);$model->save();$v=((int)$model->revisions()->max('version'))+1;Revision::create(['revisionable_type'=>$model::class,'revisionable_id'=>$model->id,'version'=>$v,'snapshot'=>$model->toArray(),'created_by'=>$r->user()->id,'change_summary'=>'Restored revision #'.$revision->version]);return response()->json($model->fresh());}
}