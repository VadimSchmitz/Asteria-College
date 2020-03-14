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
    <link rel="stylesheet" href="{{ mix('assets/css/app.css') }} "/>
{{--    <base href="{{ url('/') }}">--}}
</head>
<body class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper">
    <div id="app">
        <div id="vue-loading">{{ __('Loading') }}...</div>
    </div>


</div><!-- Scripts -->
<script
    src="https://code.jquery.com/jquery-3.4.1.js"
    integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
    crossorigin="anonymous"></script>
<script src=./assets/static/fontawesome-all.min.js"></script>
<script src="{{ mix('assets/static/AdminLTE.js')}}"></script>
<script src="{{ mix('assets/scripts/app.js') }}"></script>
</body>
</html>

