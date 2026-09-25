<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class EventController extends Controller {
 public function index(){return response()->json(Event::whereIn('status',['published','scheduled'])->where('starts_at','>=',now()->subDay())->orderBy('starts_at')->paginate(20));}
 public function store(Request $request){abort_unless($request->user()->canManage('events.create'),403);$d=$request->validate(['title'=>'required|string|max:255','slug'=>'nullable|string|max:255|unique:events,slug','excerpt'=>'nullable|string|max:1000','description'=>'nullable|string','starts_at'=>'required|date','ends_at'=>'nullable|date|after_or_equal:starts_at','location'=>'nullable|string|max:255','status'=>'nullable|in:draft,scheduled,published,archived','featured'=>'boolean','seo'=>'nullable|array']);$d['slug']=$d['slug']??Str::slug($d['title']);$d['created_by']=$request->user()->id;return response()->json(Event::create($d),201);}
 public function show(Event $event){return response()->json($event);}
 public function update(Request $request,Event $event){abort_unless($request->user()->canManage('events.edit'),403);$event->update($request->validate(['title'=>'sometimes|required|string|max:255','slug'=>'sometimes|required|string|max:255|unique:events,slug,'.$event->id,'excerpt'=>'nullable|string|max:1000','description'=>'nullable|string','starts_at'=>'sometimes|required|date','ends_at'=>'nullable|date','location'=>'nullable|string|max:255','status'=>'nullable|in:draft,scheduled,published,archived','featured'=>'boolean','seo'=>'nullable|array']));return response()->json($event);}
 public function destroy(Request $request,Event $event){abort_unless($request->user()->canManage('events.delete'),403);$event->delete();return response()->noContent();}
}