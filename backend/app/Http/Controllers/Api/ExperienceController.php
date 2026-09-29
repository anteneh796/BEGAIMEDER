<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AuditLog;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class ExperienceController extends Controller
{
    public function index()
    {
        $data = Cache::remember('public.experience', 60, fn () => Setting::query()
            ->where('is_public', true)
            ->where('key', 'like', 'experience.%')
            ->orderBy('key')
            ->get()
            ->mapWithKeys(fn (Setting $setting) => [str_replace('experience.', '', $setting->key) => $setting->value])
            ->all());

        return response()->json(['data' => $data]);
    }

    public function show(string $key)
    {
        $setting = Setting::where('key', 'experience.'.strtolower($key))
            ->where('is_public', true)
            ->firstOrFail();

        return response()->json(['data' => $setting->value]);
    }

    public function adminShow(Request $request, string $key)
    {
        abort_unless($request->user()->canManage('settings.manage'), 403);
        return response()->json(Setting::firstOrCreate(
            ['key' => 'experience.'.strtolower($key)],
            ['group' => 'experience', 'is_public' => true, 'value' => []]
        ));
    }

    public function update(Request $request, string $key)
    {
        abort_unless($request->user()->canManage('settings.manage'), 403);

        $data = $request->validate([
            'value' => ['required', 'array'],
            'is_public' => ['boolean'],
        ]);

        $setting = Setting::updateOrCreate(
            ['key' => 'experience.'.strtolower($key)],
            ['group' => 'experience', 'value' => $data['value'], 'is_public' => $data['is_public'] ?? true]
        );

        Cache::forget('public.experience');
        AuditLog::create([
            'user_id' => $request->user()->id,
            'action' => 'experience.updated',
            'auditable_type' => Setting::class,
            'auditable_id' => $setting->id,
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'metadata' => ['key' => $key],
        ]);

        return response()->json($setting);
    }
}
