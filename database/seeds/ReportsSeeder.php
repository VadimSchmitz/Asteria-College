<?php

use App\Reports;
use Illuminate\Database\Seeder;

class ReportsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Reports::class, 20)->create();
    }
}
