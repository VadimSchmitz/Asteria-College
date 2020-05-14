<?php

namespace App\Http\Controllers\API;

use App\Courses;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class CoursesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Courses[]|Collection
     */
    public function index()
    {
        return Courses::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     *
     * @return Response
     * @throws ValidationException
     */
    public function store(Request $request)
    {
        if ($request === null)
            return $response = response(['Please fill all fields'], 403);

        $this->validate($request, [
            'name' => 'required|min:3',
            'level' => 'required',
            'color' => 'required'
        ]);

        return Courses::create([
            'name' => $request['name'],
            'level' => $request['level'],
            'color' => $request['color']
        ]);
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

    public function validateCourse(Request $request)
    {
        return $request->validate([
            'name' => ['required', 'string'],
            'level' => ['required', 'string'],
            'color' => ['required', 'string']
        ]);
    }
}
