<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activities extends Model
{
    public function course()
    {
        return $this->belongsTo('App\Courses');
    }
}
