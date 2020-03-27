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
        $this->call(ActivitiesSeeder::class);
//        $this->call(ContactSeeder::class);
        $this->call(CoursesSeeder::class);
        $this->call(ReportsSeeder::class);
        $this->call(StudentsSeeder::class);
        $this->call(TestSeeder::class);

        User::create([
            'name' => 'Clavin ',
            'email' => 'Calvin@hz.nl',
            'password' => 'test'
        ]);

        // Factory
        factory(User::class, 20)->create();
    }
}
