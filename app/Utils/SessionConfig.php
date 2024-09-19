<?php

namespace App\Utils;

class SessionConfig {
    public $localeName = '';
    public $localeImage = '';
    public $localeAdminName = '';
    public $language = '';
    public $fallbackLanguages = [];
    public $store = '';
    public $locale = '';
    public $currency = '';
    public $stores = [];
    public $user = '';

    private static $instance = null;

    public function fill( Array $args = [] ) {
        foreach ( $args as $key => $val ) {
            if ( isset( $this->{$key} ) ) {
                $this->{$key} = $val;
            }
        }
    }

    public static function get() {
        if ( static::$instance == null ) {
            static::$instance = new static();
        }

        return static::$instance;
    }

}
