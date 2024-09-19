<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="locale" content="{{ $lang ?? 'en' }}">
        <meta name="store" content="{{ $store ?? 1 }}">
    
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @if( config('app.env') !== 'prod' )
            <meta name="robots" content="noindex, nofollow">
        @endif
    
        <title>{{config('app.name')}}</title>

        @vite(['resources/css/app.scss', 'resources/js/app.js'])
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
