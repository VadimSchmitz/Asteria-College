<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $v = Validator::make($request->all(), [
            'email' => 'required|email|unique:users',
            'password' => 'required|min:5',
            'name' => 'required|min:3|unique:users',
            'first_name' => 'required',
            'last_name' => 'required',
        ]);

        if ($v->fails())
            return response()->json(['status' => 'error', 'message' => $v->errors()], 422);

        $user = User::create($request->all());
        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json(['status' => 'success', 'data' => $user], 200);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('name', 'password');

        if (!$token = auth()->attempt($credentials)) {
            return response([
                'status' => 'error',
                'error' => 'invalid.credentials',
                'msg' => 'Invalid Credentials.'
            ], 400);
        }

        $user = User::find(Auth::user()->id);
        return response(['status' => 'success', 'user' => $user, 'token' => $token])->header('Authorization', $token);
    }

    public function logout()
    {
        auth()->invalidate();

        return response([
            'status' => 'success',
            'msg' => 'Logged out Successfully.'
        ], 200);
    }

    public function user(Request $request)
    {
        $user = User::find(Auth::user()->id);

        return response([
            'status' => 'success',
            'data' => $user,
        ]);
    }

    public function refresh()
    {
        return response(['status' => 'success']);
    }

    private function guard()
    {
        return Auth::guard();
    }
}
