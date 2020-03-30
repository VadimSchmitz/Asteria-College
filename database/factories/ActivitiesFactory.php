<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Activities;
use Faker\Generator as Faker;

$factory->define(Activities::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'type' => $faker->name,
//        'is_completed' => $faker->boolean
    ];
});
