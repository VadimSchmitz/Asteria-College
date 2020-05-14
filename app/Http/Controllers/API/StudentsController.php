<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Students;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class StudentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return response()->json(Students::all(), 200);
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
        return response()->json(['error' => 'This function is not available yet'], 403);
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function show(Request $request)
    {
        return response()->json(['error' => 'This function is not available'], 403);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request  $request
     *
     * @return Response
     */
    public function update(int $id, Request $request)
    {
        if(!$request || !$id)
            return response()->json(['error' => 'Fill all fields'], 403);

        $student = Students::find($id);
        $student->fill($request);
        $student->update();

        return response()->json(['success' => 'Student updated'], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function destroy(Request $request)
    {
        return response()->json(['error' => 'This function is not available yet'], 403);
    }
}
