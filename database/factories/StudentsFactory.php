<?php

/** @var Factory $factory */

use App\Students;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Students::class, function(Faker $faker) {
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'present' => $faker->boolean,
        'class' => $faker->numberBetween(0, 5)
    ];
});
