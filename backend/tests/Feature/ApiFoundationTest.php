<?php
namespace Tests\Feature;
use App\Models\Content; use App\Models\MediaAlbum; use Illuminate\Foundation\Testing\RefreshDatabase; use Tests\TestCase;
class ApiFoundationTest extends TestCase {
 use RefreshDatabase;
 public function test_health_endpoint_is_available():void{$this->getJson('/up')->assertOk();}
 public function test_security_headers_are_present():void{$this->getJson('/up')->assertHeader('X-Content-Type-Options','nosniff')->assertHeader('X-Frame-Options','SAMEORIGIN')->assertHeader('Referrer-Policy','strict-origin-when-cross-origin');}
 public function test_login_requires_credentials():void{$this->postJson('/api/v1/auth/login')->assertStatus(422);}
 public function test_public_content_endpoint_returns_a_paginated_response():void{$this->getJson('/api/v1/content')->assertOk();}
 public function test_public_album_endpoint_returns_published_collections():void{MediaAlbum::create(['title'=>'Moments','slug'=>'moments','visibility'=>'public','status'=>'published']);$this->getJson('/api/v1/albums')->assertOk()->assertJsonPath('0.slug','moments');}
 public function test_scheduled_content_is_not_public_before_publication():void{Content::create(['type'=>'story','title'=>'Future Story','slug'=>'future-story','body'=>'Body','status'=>'scheduled','scheduled_for'=>now()->addHour()]);$this->getJson('/api/v1/content/future-story')->assertNotFound();}
 public function test_analytics_endpoint_accepts_page_views():void{$this->postJson('/api/v1/analytics/page-view',['path'=>'/','referrer'=>null])->assertNoContent();}
}