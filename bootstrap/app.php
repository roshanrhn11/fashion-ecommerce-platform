<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Support\Facades\Artisan;

// சர்வர் தொடங்கும் போதே பழைய அனைத்து லாராவெல் கேச் நினைவகங்களையும் கட்டாயமாக அழிக்கிறோம்
if (app()->environment('production')) {
    try {
        Artisan::call('optimize:clear');
    } catch (\Exception $e) {
        // எரர் வந்தால் புறக்கணிக்கவும்
    }
}

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->trustProxies(at: '*');
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();