<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;

class UserRegister extends Model
{
    use HasFactory, Notifiable;


    protected $fillable = [
        'first_name',
        'last_name',
        'father_first_name',
        'grand_father_first_name',
    ];
}
