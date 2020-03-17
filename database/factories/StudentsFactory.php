<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Students;
use Faker\Generator as Faker;

$factory->define(Students::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'date_of_birth' => $faker->date(),
        'present' => $faker->boolean,
        'class' => $faker->numberBetween(0,5)
    ];
});
