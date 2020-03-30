<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reports extends Model
{
    public function student()
    {
        return $this->belongsTo('App\Students');
    }
}
