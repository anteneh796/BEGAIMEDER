<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller; use App\Models\PageView; use Illuminate\Http\Request; use Illuminate\Support\Facades\Hash;
class AnalyticsController extends Controller { public function store(Request $request){$data=$request->validate(['path'=>'required|string|max:2048','referrer'=>'nullable|string|max:2048']);PageView::create(['path'=>$data['path'],'referrer'=>$data['referrer']??null,'ip_hash'=>Hash::make((string)$request->ip()),'user_agent'=>substr((string)$request->userAgent(),0,1000)]);return response()->noContent();} }