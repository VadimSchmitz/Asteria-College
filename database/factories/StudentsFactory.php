<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Students;
use Faker\Generator as Faker;

$factory->define(Students::class, function (Faker $faker) {
    return [
        'student_number'=>$faker->unique()->randomNumber($nbDigits = 8),
        'first_name' => $faker->firstName(),
        'last_name' => $faker->lastName(),
    ];
});
