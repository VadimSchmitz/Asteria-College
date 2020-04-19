<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <!-- MetaTags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="application-name" content="{{ config('app.name', 'App name') }}">

    <title>{{ config('app.name', 'App name') }}</title>
    <!-- Styles -->
    <link rel="stylesheet" href="assets/css/web.css"/>
    <link rel="stylesheet" href="assets/css/element.css"/>
    <base href="{{ url('/') }}">
</head>

<body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed lockscreen">
<div class="wrapper">
    <div id="app">
        <div id="vue-loading">{{ __('Loading') }}..</div>
    </div>
</div>

<!-- Scripts -->
<script src="{{ url('assets/scripts') }}{{mix('/AdminLTE.js') }}"></script>
<script src="{{ url('assets/scripts') }}{{mix('/app.js') }}"></script>

<script src="{{ mix('assets/scripts/fontawesome-all.min.js')}}"></script>
</body>
</html>

