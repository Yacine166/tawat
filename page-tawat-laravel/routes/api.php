<?php
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserRegisterController;



Route::post('/register', [UserRegisterController::class,'register']);
