<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Present extends Model
{
    protected $fillable = ['isPresent'];


    public function student()
    {
        return $this->belongsTo('App\Students');
    }
}
