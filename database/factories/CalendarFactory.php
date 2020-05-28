<?php

/** @var Factory $factory */

use App\Calendar;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Calendar::class, function(Faker $faker) {
    $start = $faker->dateTimeBetween('last Monday -14 days', 'next Monday +14 days');
    return [
        'event_name' => $faker->jobTitle,
        'assignment' => $faker->colorName,
        'start_date' => $start,
        'end_date' =>  $faker->dateTimeBetween($start, $start->format('Y-m-d H:i:s').' +3 hours')
    ];
});
