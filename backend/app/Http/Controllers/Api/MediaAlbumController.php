<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\MediaAlbum;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class MediaAlbumController extends Controller {
 public function index(Request $r){$q=MediaAlbum::with(['cover','creator'])->withCount('media');if(!$r->user())$q->where('status','published')->where('visibility','public');return response()->json($q->latest()->paginate(24));}
 public function show(string $slug){return response()->json(MediaAlbum::with(['cover','media'])->where('slug',$slug)->where('status','published')->where('visibility','public')->firstOrFail());}
 public function store(Request $r){abort_unless($r->user()->canManage('media.upload'),403);$d=$r->validate(['title'=>'required|string|max:255','slug'=>'nullable|string|max:255|unique:media_albums,slug','description'=>'nullable|string|max:3000','cover_media_id'=>'nullable|exists:media_assets,id','category'=>'nullable|string|max:100','captured_at'=>'nullable|date','visibility'=>'nullable|in:public,community,private','status'=>'nullable|in:draft,published,archived']);$d['slug']=$d['slug']??Str::slug($d['title']);$d['created_by']=$r->user()->id;return response()->json(MediaAlbum::create($d),201);}
 public function update(Request $r,MediaAlbum $album){abort_unless($r->user()->canManage('media.edit'),403);$album->update($r->validate(['title'=>'sometimes|required|string|max:255','slug'=>'sometimes|required|string|max:255|unique:media_albums,slug,'.$album->id,'description'=>'nullable|string|max:3000','cover_media_id'=>'nullable|exists:media_assets,id','category'=>'nullable|string|max:100','captured_at'=>'nullable|date','visibility'=>'nullable|in:public,community,private','status'=>'nullable|in:draft,published,archived']));return response()->json($album->fresh());}
 public function destroy(Request $r,MediaAlbum $album){abort_unless($r->user()->canManage('media.delete'),403);$album->delete();return response()->noContent();}
 public function attach(Request $r,MediaAlbum $album){abort_unless($r->user()->canManage('media.edit'),403);$d=$r->validate(['media'=>'required|array','media.*.id'=>'required|exists:media_assets,id','media.*.sort_order'=>'nullable|integer|min:0','media.*.caption'=>'nullable|string|max:1000']);$sync=[];foreach($d['media'] as $i=>$m)$sync[$m['id']=['sort_order'=>$m['sort_order']??$i,'caption'=>$m['caption']??null];$album->media()->sync($sync);return response()->json($album->load('media'));}
}