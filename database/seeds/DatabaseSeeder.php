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
        $this->call(CoursesSeeder::class);
        $this->call(CalendarSeeder::class);
        $this->call(ReportsSeeder::class);
        $this->call(StudentsSeeder::class);
        $this->call(TestSeeder::class);

        User::create([
            'name' => 'Calvin',
            'first_name' => "Calvin",
            "last_name" => "Hannewijk",
            'email' => 'hann0009@hz.nl',
            'email_verified_at' => now(),
            'password' => Hash::make("admin"),
        ]);

        User::create([
            'name' => 'Evan',
            'first_name' => "Evan",
            "last_name" => "Verdoorn",
            'email' => 'evanverdoorn@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make("admin"),
        ]);

        User::create([
            'name' => 'Levi',
            'first_name' => "Levi",
            "last_name" => "Deurloo",
            'email' => 'levimbg@gmail.com',
            'email_verified_at' => now(),
            'is_admin' => true,
            'password' => Hash::make("admin"),
        ]);

        User::create([
            'name' => 'Vadim',
            'first_name' => "Vadim",
            "last_name" => "Schmitz",
            'email' => 'di3mpi3@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make("admin"),
        ]);

        User::create([
            'name' => 'Anissa',
            'first_name' => "Anissa",
            "last_name" => "Boufrahi",
            'email' => 'a.frayhi@gmail.com',
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


        User::create([
            'name' => 'Estel',
            'first_name' => "Estel",
            'prefix' => "de",
            "last_name" => "Nijs",
            'email' => 'e.nijs@respont.nl',
            'email_verified_at' => now(),
            'is_admin' => true,
            'password' => Hash::make("demo123"),
        ]);
        // Factory
//        factory(User::class, 20)->create();
    }
}
