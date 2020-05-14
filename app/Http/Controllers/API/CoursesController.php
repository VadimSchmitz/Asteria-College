<?php

namespace App\Http\Controllers\API;

use App\Courses;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CoursesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function store(Request $request)
    {
        if($this->validateCourse()) {
            Courses::create([
                'name' => $request->name,
                'level' => $request->level,
                'color' => $request->color,


            ]);


        }

       return response('/#/dashboard');
    }

    /**
     * Display the specified resource.
     *
     * @param Courses $courses
     *
     * @return Response
     */
    public function show(Courses $courses)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Courses $courses
     *
     * @return Response
     */
    public function edit(Courses $courses)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Courses $courses
     *
     * @return Response
     */
    public function update(Request $request, Courses $courses)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Courses $courses
     *
     * @return Response
     */
    public function destroy(Courses $courses)
    {
        //
    }

    public function validateCourse()
    {
        return request()->validate([
            'name' => ['required', 'string'],
            'level' => ['required', 'string'],
            'color' => ['required', 'string']
        ]);
    }
}
