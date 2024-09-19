<?php

use App\Http\Controllers\AppController;
use App\Http\Middleware\CheckLanguage;
use Illuminate\Support\Facades\Route;

Route::get('/sitemap.xml', [
    AppController::class, 'sitemap'
])->name('sitemap');

Route::middleware(CheckLanguage::class)->prefix('/{lang}')->group(function () {
    Route::get('', [AppController::class, 'index'])->name('main');
    Route::get('/home', [AppController::class, 'index'])->name('home');
});

Route::get('/{any}', function () {
    return redirect('/en');
})->where('any', '.*');
