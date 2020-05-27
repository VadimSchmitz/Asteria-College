<?php

/** @var Factory $factory */

use App\Test;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Test::class, function(Faker $faker) {
    return [
        'name' => $faker->name,
//        'grade'=> $faker->numberBetween(0,10),
//        'has_passed'=> $faker->boolean
    ];
});
