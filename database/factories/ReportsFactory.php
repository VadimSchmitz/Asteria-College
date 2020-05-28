<?php

/** @var Factory $factory */

use App\Reports;
use App\Students;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Reports::class, function(Faker $faker) use ($factory) {
    return [
        'report' => $faker->paragraph,
        'student_id' => random_int($factory->create(Students::class)->min('id'), $factory->create(Students::class)->max('id')),
    ];
});
