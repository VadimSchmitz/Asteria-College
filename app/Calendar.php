<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Calendar extends Model
{
    protected $guarded = [];

    public function getStartDateAttribute($value)
    {
        return Carbon::parse($value)->toW3cString();
    }

    public function setStartDateAttribute($value)
    {
        $this->attributes['start_date'] = Carbon::parse($value)->setTimezone('UTC')->toDateTimeString();
    }

    public function getEndDateAttribute($value)
    {
        return Carbon::parse($value)->toW3cString();
    }

    public function setEndDateAttribute($value)
    {
        $this->attributes['end_date'] = Carbon::parse($value)->setTimezone('UTC')->toDateTimeString();
    }
}
