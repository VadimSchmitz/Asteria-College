<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Courses;
use Faker\Generator as Faker;

$factory->define(Courses::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'course_level' => $faker->numberBetween(0, 5),
    ];
});
