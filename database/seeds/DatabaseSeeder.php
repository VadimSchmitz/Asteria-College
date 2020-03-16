<?php

use App\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'test',
            'email' => 'test@hz.nl',
            'password' => 'test'
        ]);

        // Factory
        factory(User::class, 20)->create();

    }
}
