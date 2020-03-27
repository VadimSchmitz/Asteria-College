<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Test;
use Faker\Generator as Faker;

$factory->define(Test::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
//        'grade'=> $faker->numberBetween(0,10),
//        'has_passed'=> $faker->boolean
    ];
});
