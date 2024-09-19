<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    public function index(Request $request, $locale="", $any=""){
        $input = $request->all();
        $lang = $request->route('lang');
        return view('welcome', [
            'lang' => $lang,
            'store' => 1,
        ]);
    }

    public function sitemap() {
        $languages = ['en', 'it',];

        return response()
            ->view('app.sitemap', [
                'languages' => $languages,
            ])
            ->header('Content-Type', 'application/xml');
    }
}
