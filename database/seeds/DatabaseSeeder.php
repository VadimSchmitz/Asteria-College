<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

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
            'name' => 'Vadim',
            'first_name' => "Vadim",
            "last_name" => "Schmitz",
            'email' => 'di3mpi3@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make("admin"),
        ]);

        User::create([
            'name' => 'Mariska',
            'first_name' => "Mariska",
            "last_name" => "Harnam",
            'email' => 'harn0005@hz.nl',
            'email_verified_at' => now(),
            'password' => Hash::make("admin"),
        ]);

        // Factory
        factory(User::class, 20)->create();
    }
}
