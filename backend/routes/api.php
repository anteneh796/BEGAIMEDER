<?php
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ContentController;
use App\Http\Controllers\Api\PageController;
use App\Http\Controllers\Api\MediaController;
use App\Http\Controllers\Api\EventController;
use Illuminate\Support\Facades\Route;
Route::prefix('v1')->middleware('throttle:api')->group(function(){
 Route::post('/auth/login',[AuthController::class,'login'])->middleware('throttle:auth');
 Route::post('/auth/logout',[AuthController::class,'logout'])->middleware('auth:sanctum');
 Route::get('/auth/me',[AuthController::class,'me'])->middleware('auth:sanctum');
 Route::get('/pages/{slug}',[PageController::class,'show']);
 Route::get('/content',[ContentController::class,'index']);
 Route::get('/content/{slug}',[ContentController::class,'show']);
 Route::get('/events',[EventController::class,'index']);
 Route::middleware('auth:sanctum')->group(function(){
  Route::apiResource('pages',PageController::class)->except(['show']);
  Route::apiResource('content',ContentController::class)->except(['index','show']);
  Route::apiResource('media',MediaController::class)->except(['show']);
  Route::apiResource('events',EventController::class)->except(['index']);
  Route::get('/media/{media}/download',[MediaController::class,'download']);
 });
});