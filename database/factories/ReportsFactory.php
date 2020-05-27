<?php

/** @var Factory $factory */

use App\Reports;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Reports::class, function(Faker $faker) {
    return [
        'report' => $faker->paragraph
    ];
});
