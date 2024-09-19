<?php
use Illuminate\Support\Facades\Auth;

function truncate( $string, $length = 100, $append = "..." ) {
    $string = trim(strip_tags($string));
    $string = trim(str_replace("\n", ' ', (str_replace("\r", ' ', $string))));

    if ( strlen($string) > $length ) {
        $string = wordwrap($string, $length);
        $string = explode("\n", $string, 2);
        $string = $string[ 0 ] . $append;
    }

    return $string;
}

function seo(): \App\Utils\Seo {
    return \App\Utils\Seo::get();
}

function sessionConfig(): \App\Utils\SessionConfig {
    return \App\Utils\SessionConfig::get();
}

function preference_get( $key = null, $default = null ) {
    if ( Auth::user() != null && Auth::user()->id != null ) {
        $user = Auth::user();
        if ( $key != null && isset($user->preferences[ $key ]) ) {
            return $user->preferences[ $key ];
        }
        if ( $key == null ) {
            return $user->preferences;
        }
    }

    return $default;
}


function clearParams( $params, $explode = ['locale', 'store'] ) {
    foreach( $params as $key => $value ) {
        if ( !in_array($key, $explode) ) {
            $params[ $key ] = "";
        }
    }
    return $params;
}

function generateRandomString( $length = 10 ) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for( $i = 0; $i < $length; $i++ ) {
        $randomString .= $characters[ rand(0, $charactersLength - 1) ];
    }
    return $randomString;
}

function generateRandomStringUppercase( $length = 10 ) {
    $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for( $i = 0; $i < $length; $i++ ) {
        $randomString .= $characters[ rand(0, $charactersLength - 1) ];
    }
    return $randomString;
}

function dateBetween( $dateStart, $dateEnd, $date = '' ) {
    $date = $date != '' ? $date : new DateTime();
    $dateStart = new DateTime($dateStart);
    $dateEnd = new DateTime($dateEnd);
    return $dateStart <= $date && $date <= $dateEnd;
}

function convertTimezone( $time = 0, $diffHour = 0 ) {
    $hour = 60 * 60;
    return date('H:i', strtotime($time) + ($hour * $diffHour));
}

function createPaginator( $input = [], $count = 0, $page = 1, $per_page = 10 ) {
    $array = array();

    if ( $per_page < $count ) {
        $pagineTot = ceil($count / $per_page);
        $array[ "total_pages" ] = $pagineTot;

        $array[ "total_items" ] = $count;
        $urlPaginatore = '?' . $_SERVER[ "QUERY_STRING" ];

        if ( !empty($input[ 'page' ]) ) {
            $urlPaginatore = str_replace('page=' . $input[ 'page' ], '', $urlPaginatore);
        }

        if ( substr($urlPaginatore, -1) == '&' ) {
            $urlPaginatore = substr($urlPaginatore, 0, -1);
        }

        $concat = '';
        if ( $urlPaginatore != '?' ) {
            $concat = '&';
        }

        $addLink = "";
        $prevNum = $page - 1;
        $prevLink = $urlPaginatore . $concat . "page=" . $prevNum;
        $array[ "prev" ][ "label" ] = $prevNum;
        $array[ "prev" ][ "link" ] = $prevLink . $addLink;
        if ( $page == 1 ) {
            unset($array[ "prev" ]);
        }

        if ( $prevNum == 1 ) {
            $array[ "prev" ][ "link" ] = $urlPaginatore . $addLink;
        }

        if ( isset($array[ 'prev' ]) ) {
            $array[ "prev" ][ "link" ] = str_replace('&&', '&', $array[ "prev" ][ "link" ]);
        }

        $offsetPagine = 12;
        $startCiclo = intval($page - $offsetPagine);
        if ( $startCiclo <= 0 ) {
            $startCiclo = 1;
        }

        $endCiclo = intval($page + $offsetPagine);
        if ( $endCiclo > $pagineTot ) {
            $endCiclo = $pagineTot;
        }

        for( $i = $startCiclo; $i <= $endCiclo; $i++ ) {
            $array[ "pages" ][ $i ][ "label" ] = $i;

            $array[ "pages" ][ $i ][ "link" ] = $urlPaginatore . $concat . "page=" . $i . $addLink;
            if ( $i == 1 )
                $array[ "pages" ][ $i ][ "link" ] = $urlPaginatore . $addLink;

            $array[ "pages" ][ $i ][ "link" ] = str_replace('&&', '&', $array[ "pages" ][ $i ][ "link" ]);

            $array[ "pages" ][ $i ][ "selected" ] = false;
            if ( $i == $page )
                $array[ "pages" ][ $i ][ "selected" ] = true;

            $array[ "pages" ][ $i ][ "end" ] = false;
            if ( $i == $endCiclo ) {
                $array[ "pages" ][ $i ][ "end" ] = true;
            }
        }

        $nextNum = $page + 1;
        $nextLink = $urlPaginatore . $concat . "page=" . $nextNum;
        $array[ "next" ][ "label" ] = $nextNum;
        $array[ "next" ][ "link" ] = $nextLink . $addLink;
        $array[ "next" ][ "link" ] = str_replace('&&', '&', $array[ "next" ][ "link" ]);
        if ( $nextNum >= $endCiclo ) {
            unset($array[ "next" ]);
        }

    }

    return $array;
}


?>
