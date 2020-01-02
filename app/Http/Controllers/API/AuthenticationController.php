<?php

namespace App\Http\Controllers\API;

use App\Composition;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class AuthenticationController extends Controller
{
    public function login(Request $request)
    {
        $username = request('username');
        $password = request('password');

        $user = User::query()->where('username', $username)->where('password', $password)->get()->first();
        if (empty($user)) {
            return response()->json(["error" => "Вы кто такой, я вас не звал"]);
        }

        return response()->json(Composition::with('tags')->get());
    }
}
