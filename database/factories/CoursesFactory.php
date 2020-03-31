<?php

/** @var Factory $factory */

use App\Courses;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Courses::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'level' => $faker->numberBetween(0, 5),
    ];
});
