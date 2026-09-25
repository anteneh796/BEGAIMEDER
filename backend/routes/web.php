<?php
use Illuminate\Support\Facades\Route;
Route::get('/', fn()=>response()->json(['name'=>'BEGAIMEDER ACADEMY CMS API','status'=>'ok','version'=>'v1']));
