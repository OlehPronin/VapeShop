<?php
namespace App\Utils;

class Seo {
    public $title = '';
    public $site_name = '';
    public $description = '';
    public $image = '';
    public $keywords = '';
    public $canonical = '';
    public $url = '';

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