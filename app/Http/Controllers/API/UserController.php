<?php

namespace App\Http\Controllers\API;

use App\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Validation\ValidationException;

class UserController extends \App\Http\Controllers\Controller
{
    public function __invoke()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return User::latest()->get();
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
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required',
        ]);

        return User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        return User::find($id);
    }

    /**
     * Check the specified resource exists.
     *
     * @param $username
     *
     * @return JsonResponse
     */
    public function check($username)
    {
        if (User::all()->contains('name', $username))
            return response()->json(['Already used'], 400);

        else return response()->json(['Valid'], 200);
    }

    /**
     *
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int     $id
     *
     * @return void
     * @throws ValidationException
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required'
        ]);

        $user = User::findOrFail($id);

        $user->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return JsonResponse
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json([
            'message' => 'User deleted successfully'
        ]);
    }
}
