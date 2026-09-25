<?php
namespace Tests\Feature;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
class ApiFoundationTest extends TestCase {
 use RefreshDatabase;
 public function test_health_endpoint_is_available():void{$this->getJson('/up')->assertOk();}
 public function test_login_requires_credentials():void{$this->postJson('/api/v1/auth/login')->assertStatus(422);}
 public function test_public_content_endpoint_returns_a_paginated_response():void{$this->getJson('/api/v1/content')->assertOk();}
}