<?php

/** @var Factory $factory */

use App\Students;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Students::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'class' => $faker->numberBetween(0, 5)
    ];
});
