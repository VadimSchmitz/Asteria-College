<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Students extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['first_name', 'last_name', 'class', 'present'];

    /**
     * Hidden attributes in arrays
     *
     * @var array
     */
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    protected $casts = [
        'present' => 'boolean'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'users_students');
    }

    public function courses()
    {
        return $this->belongsToMany(Courses::class, 'courses_students');
    }

    public function reports()
    {
        return $this->hasMany('App\Report');
    }

    public function belongsToManyCourses()
    {
        return $this->belongsToMany('App\Course');
    }
}
