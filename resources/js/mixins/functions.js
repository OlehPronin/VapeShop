import myroutes from './../myroutes/index.json';

function getLocale() {
    return document.head.querySelector("meta[name='locale']").content;
}

function getStore() {
    return document.head.querySelector("meta[name='store']").content;
}

function myroutesLaravel() {
    return myroutes.map((item) => {
        return item;
    })[0];
}

function getRouteLaravel(route, params=[]){
    let routeReturn = myroutesLaravel()[route];
    for(let key in params) {
        let find = "{" + key + "?}";
        let replace = params[key];
        routeReturn = routeReturn.replace(find, replace);

        find = "{" + key + "}";
        replace = params[key];
        routeReturn = routeReturn.replace(find, replace);
    }
    return routeReturn;
}

function paramsApi(params={}){
    let paramsBase = {
        'locale': getLocale(),
        'store': getStore()
    }

    let paramsReturn = {
        ...paramsBase,
        ...params
    };

    return paramsReturn;
}

function copyToClipboard(text=""){
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    return true;
}

function scrollToElem(elem=""){
    console.log('Scroll to', elem);

    document.querySelector(elem).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

export default {
    myroutesLaravel,
    getRouteLaravel,
    paramsApi,
    copyToClipboard,
    scrollToElem
}
