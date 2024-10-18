<?php

namespace App\Http\Controllers;

use App\Models\UserRegister;
use Illuminate\Http\Request;

class UserRegisterController extends Controller
{

    function register(Request $request)
    {
        $validatedData = $request->validate([
            'first_name' => 'string|max:255',
            'last_name' => 'string|max:255',
            'father_first_name' => 'string|max:255',
            'grand_father_first_name' => 'string|max:255',
        ]);
        UserRegister::create($validatedData);

        return response()->json(['message' => 'User registered successfully'], 201);
    }
}
