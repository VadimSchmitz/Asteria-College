<?php

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
        $this->call(ContactSeeder::class);
        $this->call(CoursesSeeder::class);
        $this->call(ReportsSeeder::class);
        $this->call(StudentsSeeder::class);
        $this->call(TestSeeder::class);
    }
}
