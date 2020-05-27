<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('users_students', function(Blueprint $table) {
            $table->unsignedBigInteger('user_id')->unsigned();
            $table->unsignedBigInteger('student_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('student_id')->references('id')->on('students')->onDelete('cascade');
//            $table->unsignedBigInteger('user_id');
//            $table->foreign('user_id')->references('id')->on('users');
//
//            $table->unsignedBigInteger('student_id');
//            $table->foreign('student_id')->references('id')->on('students');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_students');
    }
}
