<?php

/** @var Factory $factory */

use App\Activities;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Activities::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'type' => $faker->name,
//        'is_completed' => $faker->boolean
    ];
});
