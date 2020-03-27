<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Courses extends Model
{
    public function students()
    {
        return $this->belongsToMany(Students::class, 'courses_students');
    }

    public function tests()
    {
        return $this->hasMany('App\Test');
    }

    public function activities()
    {
        return $this->hasMany('App\Activities');
    }
}
