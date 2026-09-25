<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller; use App\Models\PageView; use Illuminate\Http\Request; use Illuminate\Support\Facades\Hash; use Illuminate\Support\Facades\DB;
class AnalyticsController extends Controller {
 public function store(Request $request){$data=$request->validate(['path'=>'required|string|max:2048','referrer'=>'nullable|string|max:2048']);PageView::create(['path'=>$data['path'],'referrer'=>$data['referrer']??null,'ip_hash'=>Hash::make((string)$request->ip()),'user_agent'=>substr((string)$request->userAgent(),0,1000)]);return response()->noContent();}
 public function summary(Request $request){abort_unless($request->user()->canManage('analytics.view'),403);$days=min(max($request->integer('days',30),1),90);$since=now()->subDays($days);return response()->json(['period_days'=>$days,'page_views'=>PageView::where('created_at','>=',$since)->count(),'top_pages'=>PageView::where('created_at','>=',$since)->select('path',DB::raw('count(*) as views'))->groupBy('path')->orderByDesc('views')->limit(10)->get()]);}
}