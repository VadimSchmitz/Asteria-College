<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Students;
use Faker\Generator as Faker;

$factory->define(Students::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'present' => $faker->boolean,
        'class' => $faker->numberBetween(0,5)
    ];
});
