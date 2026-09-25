<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\FormSubmission;
use Illuminate\Http\Request;
class FormSubmissionController extends Controller {
 public function store(Request $request){
  $d=$request->validate(['type'=>'required|in:contact,admission','name'=>'required|string|max:255','email'=>'nullable|email|max:255','phone'=>'nullable|string|max:50','payload'=>'required|array']);
  $d['status']='new'; return response()->json(FormSubmission::create($d),201);
 }
 public function index(Request $request){abort_unless($request->user()->canManage('users.manage'),403);return response()->json(FormSubmission::with('assignee')->latest()->paginate(30));}
 public function update(Request $request,FormSubmission $submission){abort_unless($request->user()->canManage('users.manage'),403);$submission->update($request->validate(['status'=>'required|in:new,in_progress,resolved,spam','assigned_to'=>'nullable|exists:users,id','notes'=>'nullable|string|max:5000']));return response()->json($submission->fresh('assignee'));}
}