<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <!-- MetaTags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="application-name" content="{{ config('app.name', 'App name') }}">
    <title>{{ config('app.name', 'App name') }}</title>
    <link rel="shortcut icon" href="{{ url('favicon.ico') }}" type="image/x-icon">
    <link rel="icon" href="{{ url('favicon.ico') }}" type="image/x-icon">
    <!-- Styles -->
    <link rel="stylesheet" href="{{ url('assets/css/web.css') }}"/>
    <link rel="stylesheet" href="{{ url('assets/css/element.css') }}"/>
    <base href="{{ url('/') }}">
</head>

<body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed lockscreen">
    <div class="wrapper">
        <div id="app">
            <div id="vue-loading">{{ __('Loading') }}..</div>
        </div>
    </div>
</body>
    <!-- Scripts -->
    <script src="{{ url('assets/scripts') }}{{ mix('/app.js') }}"></script>
    <script src="{{ url('assets/scripts') }}{{ mix('/AdminLTE.js') }}"></script>
    <script src="{{ mix('assets/scripts/fontawesome-all.min.js')}}"></script>
    <!-- Scripts END -->
</html>

