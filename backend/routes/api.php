<?php
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ContentController;
use App\Http\Controllers\Api\PageController;
use App\Http\Controllers\Api\MediaController;
use App\Http\Controllers\Api\EventController;
use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\FormSubmissionController;
use Illuminate\Support\Facades\Route;
Route::prefix('v1')->middleware('throttle:api')->group(function(){
 Route::post('/auth/login',[AuthController::class,'login'])->middleware('throttle:auth');
 Route::post('/auth/logout',[AuthController::class,'logout'])->middleware('auth:sanctum');
 Route::get('/auth/me',[AuthController::class,'me'])->middleware('auth:sanctum');
 Route::get('/pages/{slug}',[PageController::class,'show']);
 Route::get('/content',[ContentController::class,'index']);
 Route::get('/content/{slug}',[ContentController::class,'show']);
 Route::get('/events',[EventController::class,'index']);
 Route::post('/forms',[FormSubmissionController::class,'store'])->middleware('throttle:api');
 Route::middleware('auth:sanctum')->group(function(){
  Route::apiResource('pages',PageController::class)->except(['show']);
  Route::apiResource('content',ContentController::class)->except(['index','show']);
  Route::apiResource('media',MediaController::class)->except(['show']);
  Route::apiResource('events',EventController::class)->except(['index']);
  Route::get('/media/{media}/download',[MediaController::class,'download']);
  Route::get('/admin/users',[AdminController::class,'users']);
  Route::get('/admin/roles',[AdminController::class,'roles']);
  Route::get('/admin/permissions',[AdminController::class,'permissions']);
  Route::get('/admin/settings',[AdminController::class,'settings']);
  Route::put('/admin/settings/{key}',[AdminController::class,'updateSetting']);
  Route::get('/admin/audit-logs',[AdminController::class,'audit']);
  Route::get('/admin/forms',[FormSubmissionController::class,'index']);
  Route::patch('/admin/forms/{submission}',[FormSubmissionController::class,'update']);
 });
});