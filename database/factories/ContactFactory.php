<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Contact;
use Faker\Generator as Faker;

$factory->define(Contact::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'address' => $faker->address,
        'email_1' => $faker->unique()->safeEmail,
        'email_2' => $faker->unique()->safeEmail,
        'phone_number_1' => $faker->phoneNumber,
        'phone_number_2' => $faker->phoneNumber,
    ];
});
