<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('auth/login', 'AuthController@login');
Route::post('auth/register', 'AuthController@register');

Route::group(['middleware' => 'jwt.auth'], function() {
    Route::get('auth/user', 'AuthController@user');
    Route::get('auth/users', 'API\UserController');
    Route::post('auth/logout', 'AuthController@logout');
});

Route::group(['middleware' => 'jwt.refresh'], function(){
    Route::get('auth/refresh', 'AuthController@refresh');
});

Route::namespace('API')->group(function() {
    Route::apiResources(['users' => 'UserController']);
});



Route::middleware('auth')->namespace('API')->group(function() {
    Route::apiResources([
        'students'=>'StudentsController',
        'calendar'=>'CalendarController',
        'courses'=> 'CoursesController'
    ]);
});
