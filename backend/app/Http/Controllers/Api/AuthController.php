<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
class AuthController extends Controller {
 public function login(Request $request){
  $data=$request->validate(['email'=>'required|email','password'=>'required|string','device_name'=>'nullable|string|max:100']);
  $user=User::with('roles.permissions')->where('email',$data['email'])->first();
  if(!$user||!$user->is_active||!Hash::check($data['password'],$user->password)) throw ValidationException::withMessages(['email'=>'The provided credentials are invalid.']);
  return response()->json(['token'=>$user->createToken($data['device_name']??'cms-admin')->plainTextToken,'user'=>$user]);
 }
 public function logout(Request $request){$request->user()->currentAccessToken()?->delete();return response()->json(['message'=>'Signed out.']);}
 public function me(Request $request){return response()->json($request->user()->load('roles.permissions'));}
}