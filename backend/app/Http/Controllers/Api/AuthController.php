<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\AuditLog;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Str;
class AuthController extends Controller {
 public function login(Request $request){
  $data=$request->validate(['email'=>'required|email','password'=>'required|string','device_name'=>'nullable|string|max:100','otp'=>'nullable|digits:6']);
  $user=User::with('roles.permissions')->where('email',$data['email'])->first();
  if(!$user||!$user->is_active||!Hash::check($data['password'],$user->password))throw ValidationException::withMessages(['email'=>'The provided credentials are invalid.']);
  if(!$user->hasVerifiedEmail())throw ValidationException::withMessages(['email'=>'Email verification is required before signing in.']);
  if($user->two_factor_enabled && !$this->validOtp((string)$user->two_factor_secret,(string)($data['otp']??'')))throw ValidationException::withMessages(['otp'=>'A valid two-factor authentication code is required.']);
  return response()->json(['token'=>$user->createToken($data['device_name']??'cms-admin')->plainTextToken,'user'=>$user]);
 }
 public function logout(Request $request){$request->user()->currentAccessToken()?->delete();return response()->json(['message'=>'Signed out.']);}
 public function me(Request $request){return response()->json($request->user()->load('roles.permissions'));}
 public function setupTwoFactor(Request $request){$u=$request->user();abort_unless($u->canManage('users.manage'),403);$alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';$secret='';$bytes=random_bytes(20);for($i=0;$i<strlen($bytes);$i++)$secret.=$alphabet[ord($bytes[$i])%32];$u->forceFill(['two_factor_secret'=>$secret,'two_factor_enabled'=>false,'two_factor_confirmed_at'=>null])->save();$label=rawurlencode('BEGAIMEDER ACADEMY:'.$u->email);return response()->json(['secret'=>$secret,'otpauth_uri'=>'otpauth://totp/'.$label.'?secret='.$secret.'&issuer=BEGAIMEDER%20ACADEMY']);}
 public function confirmTwoFactor(Request $request){$request->validate(['otp'=>'required|digits:6']);$u=$request->user();abort_unless($u->two_factor_secret,422);abort_unless($this->validOtp((string)$u->two_factor_secret,$request->string('otp')->toString()),422);$u->forceFill(['two_factor_enabled'=>true,'two_factor_confirmed_at'=>now()])->save();return response()->json(['message'=>'Two-factor authentication enabled.']);}
 public function disableTwoFactor(Request $request){$request->validate(['otp'=>'required|digits:6']);$u=$request->user();abort_unless($this->validOtp((string)$u->two_factor_secret,$request->string('otp')->toString()),422);$u->forceFill(['two_factor_enabled'=>false,'two_factor_secret'=>null,'two_factor_confirmed_at'=>null])->save();return response()->json(['message'=>'Two-factor authentication disabled.']);}
 public function forgotPassword(Request $request){$data=$request->validate(['email'=>'required|email']);$status=Password::sendResetLink(['email'=>$data['email']]);return response()->json(['status'=>$status]);}
 public function resetPassword(Request $request){$data=$request->validate(['token'=>'required','email'=>'required|email','password'=>'required|string|min:12|confirmed']);$status=Password::reset($data,function(User $u,string $password){$u->forceFill(['password'=>$password,'remember_token'=>Str::random(60)])->save();$u->tokens()->delete();});if($status!==Password::PASSWORD_RESET)throw ValidationException::withMessages(['email'=>__($status)]);return response()->json(['status'=>$status]);}
 private function validOtp(string $secret,string $otp):bool{if(strlen($otp)!==6||$secret==='')return false;$counter=(int)floor(time()/30);for($offset=-1;$offset<=1;$offset++){if(hash_equals($this->hotp($secret,$counter+$offset),$otp))return true;}return false;}
 private function hotp(string $secret,int $counter):string{$alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';$secret=strtoupper($secret);$bits='';for($i=0,$n=strlen($secret);$i<$n;$i++){$p=strpos($alphabet,$secret[$i]);if($p===false)continue;$bits.=str_pad(decbin($p),5,'0',STR_PAD_LEFT);} $bytes='';for($i=0;$i+7<strlen($bits);$i+=8)$bytes.=chr(bindec(substr($bits,$i,8)));$bin=pack('N2',($counter>>32)&0xffffffff,$counter&0xffffffff);$hash=hash_hmac('sha1',$bin,$bytes,true);$offset=ord($hash[19])&15;$code=((ord($hash[$offset])&127)<<24)|((ord($hash[$offset+1])&255)<<16)|((ord($hash[$offset+2])&255)<<8)|(ord($hash[$offset+3])&255);return str_pad((string)($code%1000000),6,'0',STR_PAD_LEFT);}
}