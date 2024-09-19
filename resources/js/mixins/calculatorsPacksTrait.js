function calculateChoose(game={}, pack={}, cart={}){
    let gamePack = "";
    let price = 0;
    let timing = 0;
    let infos = {};

    // if( game && pack ){
    //     gamePack = game.slug + "-" + pack.slug;
    // }

    console.log('*** calculateChoose', pack.slug);

    switch(pack.slug) {
        case 'apex_legends_wins_boost':
            // $infos  = $this->apexLegendsCalculator->calculateApexLegendsWinBoosting($pack, $data);
            // $price  = $infos['price'] ?? 0;
            // $timing = $infos['timing'] ?? 0;
            break;

        case 'apex_legends_arena_placements_boost':
            // $infos  = $this->apexLegendsCalculator->calculateApexLegendsArenaPlacementsBoosting($pack, $data);
            // $price  = $infos['price'] ?? 0;
            // $timing = $infos['timing'] ?? 0;
            break;

        case 'apex_legends_level_boosting':
            // $infos  = $this->apexLegendsCalculator->calculateApexLegendsLevelBoosting($pack, $data);
            // $price  = $infos['price'] ?? 0;
            // $timing = $infos['timing'] ?? 0;
            break;

        case 'apex_legends_kills_boost':
            // $infos  = $this->apexLegendsCalculator->calculateApexLegendsKillsBoost($pack, $data);
            // $price  = $infos['price'] ?? 0;
            // $timing = $infos['timing'] ?? 0;
            break;

        case 'apex_legends_achievement_boosting':
            // $infos  = $this->apexLegendsCalculator->calculateApexLegendsAchievementBoost($pack, $data);
            // $price  = $infos['price'] ?? 0;
            // $timing = $infos['timing'] ?? 0;
            break;

        case 'apex_legends_battle_pass':
            // $infos = $this->apexLegendsCalculator->calculcateApexLegendsBattlePass($pack, $data);
            // $price  = $infos['price'] ?? 0;
            // $timing = $infos['timing'] ?? 0;
            break;

        case 'apex-legends-rank-boosting':
        // case 'apex_legends_arena_rank_boost':
            // console.log(game.config);
            infos = calculateRankBoosting(pack, cart);
            // console.log(cart.current_rank, cart.desired_rank, pack.slabs);
            // $infos = $this->apexLegendsCalculator->calculateApexLegendsRankBoost($pack, $data);
            price  = infos.price ?? 0;
            timing  = infos.timing ?? 0;
            // $extraPoints = $infos['extraPoints'] ?? [];
            break;

        default:
            console.log("calculateChoose: ", gamePack);
    }

    if( 
        price && price > 0 &&
        cart.game_pack_option_ids && cart.game_pack_option_ids.length > 0 
    ){
        price = calculateExtraOptions(pack, cart, price);
        // $price = $this->extraOptionsCalculator->calculate($pack, $data, $price);
    }

    if( price && price > 0 ){
        price = calculateGameOptions(game, cart, price);
    }

    return {
        price: price,
        timing: timing,
        extraPoint: 0
    };
}

function calculateSlabPrice(slabs, from=0, to=0){
    console.log("calculateSlabPrice");

    let price  = 0;
    let timing = 0;

    let totalDifference = to - from;
    if( totalDifference > 0 ){

        let slabLowerBound = 0;
        let slabUpperBound = 0;
        let slabRate       = 0;
        let slabTiming     = 0;
        let difference     = 0;
        let priceSlab      = 0;
        let priceTiming    = 0;
        for( let i=0; i < slabs.length; i++){

            if( i == 0 ){
                slabLowerBound = 0;
                slabUpperBound = slabs[0]['slab'];
                slabRate       = slabs[0]['price'];
                slabTiming     = slabs[0]['timing'] ?? 0;

            } else {
                slabLowerBound = slabs[i - 1]['slab'];
                slabUpperBound = slabs[i]['slab'];
                slabRate       = slabs[i]['price'];
                slabTiming     = slabs[i]['timing'] ?? 0;

            }

            if( from > slabLowerBound && from <= slabUpperBound ){
                if( to <= slabUpperBound) {
                    difference = to - from;
                } else {
                    difference = slabUpperBound - from;
                }

                priceSlab = difference * slabRate;
                price    += priceSlab;

                priceTiming = difference * slabTiming;
                timing     += priceTiming;

            } else if( (from <= slabLowerBound) && (to >= slabUpperBound) ){
                difference = slabUpperBound - slabLowerBound;
                priceSlab = difference * slabRate;
                price += priceSlab;

                priceTiming = difference * slabTiming;
                timing += priceTiming;

            } else if( to > slabLowerBound && to <= slabUpperBound ){
                difference = to - slabLowerBound;
                priceSlab = difference * slabRate;
                price += priceSlab;

                priceTiming = difference * slabTiming;
                timing += priceTiming;
            }

        }

        // price = round(price, 2);
    }

    return {
        price: price,
        timing: timing
        // 'timing'           => $timing,
        // 'points'           => $to,
        // 'differencePoints' => $totalDifference
    };
}

function calculateGamesPrice($boostingPack, $boostingPackSlabs, $totalDifference, $totalCount, $maxCount) {
    return "calculateGamesPrice";
    $price = 0.0;

    for($i = 0; $i < count($boostingPackSlabs); $i++) {
        if($i != 0 && $totalDifference > $boostingPackSlabs[$i-1]['slab'] && $totalDifference <= $boostingPackSlabs[$i]['slab']) {
            $pricePerGame = round($boostingPackSlabs[$i]['rate'] / $maxCount, 2);
            $price = $pricePerGame * $totalCount;
            break;
        } else {
            if($totalDifference <= $boostingPackSlabs[0]['slab']) {
                $pricePerGame = round($boostingPackSlabs[$i]['rate'] / $maxCount, 2);
                $price = $pricePerGame * $totalCount;
                break;
            }
        }
    }

    $price = round($price, 2);

    return $price;
}

function calculcateSlabRateIntoCount($boostingPackSlabs, $totalCount) {
    return "calculcateSlabRateIntoCount";
    $price = $timing = 0;

    if($totalCount > 0) {
        for($i = 0; $i < count($boostingPackSlabs); $i++) {
            if($i != 0 && $totalCount > $boostingPackSlabs[$i-1]['slab'] && $totalCount <= $boostingPackSlabs[$i]['slab']) {
                $slabRate   = $boostingPackSlabs[$i]['rate'] ?? 0;
                $slabTiming = $boostingPackSlabs[$i]['timing'] ?? 0;
                break;
            } else {
                if($totalCount <= $boostingPackSlabs[0]['slab']) {
                    $slabRate   = $boostingPackSlabs[0]['rate'] ?? 0;
                    $slabTiming = $boostingPackSlabs[0]['timing'] ?? 0;
                    break;
                }
            }
        }
        if(isset($slabRate)) {
            $price = round(($totalCount * $slabRate), 2);
        }
        if(isset($slabTiming)) {
            $timing = $totalCount * $slabTiming;
        }
    }

    return [
        // 'price'  => $price,
        // 'timing' => $timing
    ];
}

function calculateSelectedSlabRateIntoCount($boostingPackSlabs, $selectedSlab, $totalCount) {
    return "calculateSelectedSlabRateIntoCount";
    $price = $timing = 0;

    if( $selectedSlab > 0 ){
        for($i = 0; $i < count($boostingPackSlabs); $i++) {
            if($i != 0 && $selectedSlab > $boostingPackSlabs[$i-1]['slab'] && $selectedSlab <= $boostingPackSlabs[$i]['slab']) {
                $slabRate = $boostingPackSlabs[$i]['rate'] ?? 0;
                $slabTiming = $boostingPackSlabs[$i]['timing'] ?? 0;
                break;
            } else {
                if($selectedSlab <= $boostingPackSlabs[0]['slab']) {
                    $slabRate = $boostingPackSlabs[0]['rate'] ?? 0;
                    $slabTiming = $boostingPackSlabs[0]['timing'] ?? 0;
                    break;
                }
            }
        }

        if(isset($slabRate)) {
            $price = round(($totalCount * $slabRate), 2);
        }
        if(isset($slabTiming)) {
            $timing = $totalCount * $slabTiming;
        }

    }
    return [
        // 'price'  => $price,
        // 'timing' => $timing
    ];
}

function calculateSlabPriceFromTo($boostingPackSlabs, $from, $to){
    return "calculateSlabPriceFromTo";
    $price = $timing = 0;
    
    // foreach( $boostingPackSlabs as $slab ){
    //     if( $slab['slab'] < $from ){
    //         continue;
    //     }elseif( $slab['slab'] >= $to ){
    //         continue;
    //     }
    //     $price += round($slab['rate'] ?? 0, 2);
    //     $timing += $slab['timing'] ?? 0;
    // }

    return [
        // 'price' => $price,
        // 'timing' => $timing
    ];
}

function calculateExtraPointsRange($from=0, $to=0, $priceConfig){
    return "calculateExtraPointsRange";
    // if( empty($priceConfig) || empty($priceConfig->extra_points_limit) ){
    //     return [];
    // }

    // $difference = $differenceShow =  $to - $from;
    // $addPointsNext = true;
    // if( $to > $priceConfig->extra_points_limit ){
    //     $addPointsNext = false;
    //     $difference = $priceConfig->extra_points_limit - $from;
    // }

    // $extraPoints = 0;
    // $extraPointsNextWin = 0;
    // $loop = 0;
    // foreach( $priceConfig->extra_points as $key => $value ){
    //     if( $difference >= $key ){
    //         $extraPoints = $value;
    //         // $extraPoints = 0;
    //         $extraPointsNextWin = 0;

    //     }elseif( empty($extraPointsNextWin) && $addPointsNext ){
    //         $extraPointsNextLimit = $key;
    //         $extraPointsNextWin = $value;

    //     }elseif( $loop == 0 && empty($extraPointsNextWin) ){
    //         $loop++;
    //         $extraPointsNextLimit = $key;
    //         $extraPointsNextWin = $value;
    //     }
    // }

    // $stringExtraPoints = "";
    // if( !empty($extraPoints) ){
    //     $stringExtraPoints .= 'With this purchase of <strong class="color-orange">'.$differenceShow.'</strong> you will earn <strong class="color-orange">'.$extraPoints.'</strong> points for free';
    // }

    // if( !empty($extraPointsNextLimit) ){
    //     $addPointsNext = $extraPointsNextLimit - ($to - $from);

    //     if( !empty($addPointsNext) && $addPointsNext > 0 ){
    //         if( !empty($extraPoints) ){
    //             $stringExtraPoints .= '<br>';
    //         }
    //         $stringExtraPoints .= 'Add <strong class="color-orange">'.$addPointsNext.'</strong> more to earn additional <strong class="color-orange">'.$extraPointsNextWin.'</strong> extra';
    //     }
    // }

    // if( $to > $priceConfig->extra_points_limit ){
    //     $stringExtraPoints .= '<br>Promotion available only up to '.$priceConfig->extra_points_limit;
    // }

    // dd($extraPoints, $stringExtraPoints);
    return [
        // 'extraPoints'       => $extraPoints ?? 0,
        // 'stringExtraPoints' => $stringExtraPoints ?? ''
    ];
}

function calculateExtraOptions(pack, cart, price) {
    console.log("calculateExtraOptions");
    let priceBase = price;
    
    if( price > 0 ){
        if( pack.extra_options && pack.extra_options.length > 0 ){
            for( let i=0; i<pack.extra_options.length; i++ ){
                let eoId = pack.extra_options[i].id ?? 0;
                if( cart.game_pack_option_ids.includes(eoId) ){
                    let packA = pack.extra_options[i];
                    if( packA.price_type == "int" ){
                        price += packA.price;
                    }else{
                        price += (priceBase * packA.price) / 100; 
                    }
                }
            }
        }
    }

    return price;
}

function calculateGameOptions(game, cart, price) {
    console.log("calculateGameOptions");

    console.log(game);

    if( price && price > 0 && game && game.config ){
        let config = game.config;

        if( config.roles ){
            if( isset($roles[0]['role']) && $roles[0]['role']!= null ){
                $role = $roles[0]['role'];
                $price += (($price * $game_conf['roles'][$role]['rate'])/100);
            }
        }

        if( config.role ){
            $role = $data['role'];
            if( isset($role) && $role != null ){
                $price += (($price * $game_conf['roles'][$role]['rate'])/100);
            }
        }

        if( config.platform ){
            $platform = $data['platform'];
            if( !empty($game_conf['platforms'][$platform]['rate']) ){
                $price += (($price * $game_conf['platforms'][$platform]['rate'])/100);
            }
        }

        if( config.server ){
            $server = $data['server'];
            $price += (($price * $game_conf['servers'][$server]['rate'])/100);
        }

    }

    return price;
}


///////////////////////////////////////////////////////////////////////////////////////////
function calculateRankBoosting(pack, cart) {
    console.log("calculateRankBoosting");
    let from = cart.current_rank ?? 0;
    let to   = cart.desired_rank ?? 0;

    let infos = calculateSlabPrice(pack.slabs, from, to);

    // $extraPoints = $this->calculateExtraPointsRange($from, $to, $pack->getPackPriceConfigurations());

    return {
        price      : infos.price ?? 0,
        timing     : infos.timing ?? 0,
        // extraPoints: extraPoints ?? [],
    };
}

function getDiscountCoupon(amount, coupon){
    if( coupon && coupon.id ){
        if( coupon.usage_type == 1 ){
            amount = amount - ( ( amount * coupon.discount ) / 100 );
        }else if( coupon.usage_type == 2 ){
            amount = amount - coupon.discount;
        }
    }
    return amount;
}

function getInfoSelectedPack(cart, pack){
    let findMe = pack.slug ?? '';

    let string = "DIO CNAE";
   
    if( [
            "apex-legends-rank-boosting", 
        ].includes(findMe)
    ){
        string = cart.current_rank + " > " + cart.desired_rank;
    }

    return string;
}
///////////////////////////////////////////////////////////////////////////////////////////

export default {
    calculateChoose,
    calculateSlabPrice,
    calculateGamesPrice,
    calculcateSlabRateIntoCount,
    calculateSelectedSlabRateIntoCount,
    calculateSlabPriceFromTo,
    calculateExtraPointsRange,
    getDiscountCoupon,
    getInfoSelectedPack
}