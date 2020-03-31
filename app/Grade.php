<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    protected $fillable = ['student_id', 'grade'];

    public function test()
    {
        return $this->belongsTo('App\Test')->where('id', 'test_id');
    }
}
