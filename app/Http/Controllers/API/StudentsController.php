<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Students;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class StudentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
       return Students::all();
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
    public function store(Students $students)

    {
//
        Students::create($this->validateStudent());

        return response()->json(['Student succesvol opgeslagen.'], 200);


    }


    /**
     * Display the specified resource.
     *
     * @param Students $students
     *
     * @return Response
     */
    public function show(Students $students)

    {


        Students::where('id', 1)->first();

        return view('studentenlijst.show', [
            'student' => @$students
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Students $students
     *
     * @return Response
     */
    public function edit(Students $students)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request  $request
     * @param Students $students
     *
     * @return Response
     */
    public function update(Students $students)
    {
        $students->update($this->validateStudent());
        return response()->json(['Student succesvol opgeslagen.'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Students $students
     *
     * @return Response
     */
    public function destroy(Students $students)
    {
        //
    }
    protected function validateStudent()
    {

        return request()->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'present' => 'required',
            'class' => 'required'
        ]);
    }
}
