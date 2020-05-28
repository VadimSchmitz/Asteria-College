<?php

use App\Calendar;
use App\Courses;
use Illuminate\Database\Seeder;

class CalendarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Calendar::class, 30)->create();

        Calendar::create([
            'event_name' => 'Engels',
            'assignment' => 'Make practice 1-22',
            'start_date' => new DateTime('2020-05-27 07:00:00'),
            'end_date' => new DateTime('2020-05-09 10:00:00')
        ]);

        Calendar::create([
            'event_name' => 'Nederlands',
            'assignment' => 'Opracht 33',
            'start_date' => new DateTime('2020-05-27 11:00:00'),
            'end_date' => new DateTime('2020-05-27 13:00:00')
        ]);

        Calendar::create([
            'event_name' => 'Biologie',
            'assignment' => 'Opracht 1',
            'start_date' => new DateTime('2020-05-27 13:15:00'),
            'end_date' => new DateTime('2020-05-27 14:30:00')
        ]);
    }
}
