<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;


class Authenticate extends Middleware
{
    /**
     * Handle user authentication request
     *
     * @param Request    $request
     * @param Closure    $next
     * @param array|null $guard
     *
     * @return string
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if ($this->authenticate($request, $guard) === 'authentication_error')
            return response()->make(['error' => 'U heeft geen rechten dit te bekijken', 'code' => 401], 401);

        return $next($request);
    }

    /**
     * Authenticate the user
     *
     * @param Request    $request
     * @param array|void $guards
     *
     * @return string|null
     */
    protected function authenticate($request, $guards)
    {
        if (empty($guards))
            $guards = [null];

        foreach ($guards as $guard)
            if ($this->auth->guard($guard)->check())
                return $this->auth->shouldUse($guard);

        return 'authentication_error';
    }

    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param Request $request
     *
     * @return string|null
     */
    protected function redirectTo($request)
    {
        if (!$request->expectsJson()) {
            return route('login');
        }
    }
}
