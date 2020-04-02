<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'email', 'first_name', 'last_name', 'password'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get all of the Students this user can
     * manage
     * @return HasMany
     */
    public function students()
    {
        return $this->hasMany(Students::class, 'users_students');
    }

    /**
     * Get the identifier
     * @return JWTSubject
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Get custom claims
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
