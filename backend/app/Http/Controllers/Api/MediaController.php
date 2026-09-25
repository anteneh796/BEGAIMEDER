<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\AuditLog;
use App\Models\MediaAsset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Jobs\ProcessMediaAsset;
class MediaController extends Controller {
 public function index(Request $request){abort_unless($request->user()->canManage('media.view'),403);return response()->json(MediaAsset::with('uploader')->latest()->paginate(30));}
 public function store(Request $request){abort_unless($request->user()->canManage('media.upload'),403);$d=$request->validate(['file'=>'required|file|max:51200|mimes:jpg,jpeg,png,webp,avif,mp4,webm,pdf,doc,docx','title'=>'nullable|string|max:255','alt_text'=>'nullable|string|max:500','caption'=>'nullable|string|max:1000','visibility'=>'nullable|in:public,community,private','consent_status'=>'nullable|in:not_required,pending,approved']);$f=$request->file('file');$path=$f->store('media','public');$a=MediaAsset::create(['title'=>$d['title']??$f->getClientOriginalName(),'type'=>str_starts_with($f->getMimeType(),'image/')?'image':(str_starts_with($f->getMimeType(),'video/')?'video':'document'),'disk'=>'public','path'=>$path,'mime_type'=>$f->getMimeType(),'size'=>$f->getSize(),'visibility'=>$d['visibility']??'private','status'=>'ready','alt_text'=>$d['alt_text']??null,'caption'=>$d['caption']??null,'consent_status'=>$d['consent_status']??'not_required','metadata'=>[],'uploaded_by'=>$request->user()->id]);ProcessMediaAsset::dispatch($a->id);
 return response()->json($a,201);}
 public function update(Request $request,MediaAsset $media){abort_unless($request->user()->canManage('media.edit'),403);$media->update($request->validate(['title'=>'nullable|string|max:255','alt_text'=>'nullable|string|max:500','caption'=>'nullable|string|max:1000','visibility'=>'nullable|in:public,community,private','consent_status'=>'nullable|in:not_required,pending,approved']));return response()->json($media);}
 public function destroy(Request $request,MediaAsset $media){abort_unless($request->user()->canManage('media.delete'),403);Storage::disk($media->disk)->delete($media->path);$media->delete();return response()->noContent();}
 public function download(Request $request,MediaAsset $media){abort_unless($media->visibility==='public'||$request->user()->canManage('media.view'),403);return Storage::disk($media->disk)->download($media->path,$media->title);}
}