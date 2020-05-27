<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Reports;
use App\Students;
use Facade\FlareClient\Report;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ReportsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
       return response()->json(Reports::all()->toArray(), 200);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return JsonResponse
     */
    public function show($id)
    {
        return response()->json(Reports::findOrFail($id), 200);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return JsonResponse
     */
    public function showByStudentID($id)
    {
        return response()->json(["student" => Students::findOrFail($id), "reports" => Reports::all()->where("student_id",  $id)], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Reports $reports
     *
     * @return Response
     */
    public function update(Request $request, Reports $reports)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Reports $reports
     *
     * @return Response
     */
    public function destroy(Reports $reports)
    {
        //
    }
}
