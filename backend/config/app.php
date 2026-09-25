<?php
use Illuminate\Support\ServiceProvider;
return [
 'name'=>env('APP_NAME','BEGAIMEDER ACADEMY CMS'),
 'env'=>env('APP_ENV','production'),
 'debug'=>(bool)env('APP_DEBUG',false),
 'url'=>env('APP_URL','http://localhost'),
 'timezone'=>'Africa/Addis_Ababa',
 'locale'=>env('APP_LOCALE','en'),
 'fallback_locale'=>env('APP_FALLBACK_LOCALE','en'),
 'faker_locale'=>env('APP_FAKER_LOCALE','en_US'),
 'key'=>env('APP_KEY'),
 'cipher'=>'AES-256-CBC',
 'maintenance'=>['driver'=>'file'],
 'providers'=>ServiceProvider::defaultProviders()->merge([App\Providers\AppServiceProvider::class])->toArray(),
];