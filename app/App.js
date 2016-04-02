'use strict'

import * as appActions from './actions/app';


class App {
    constructor() {
        this.store = null;
    }

    boot(store) {
        this.store.dispatch(appActions.startSearching());

        /*const integrityFail = this.bootFail.bind(this);
        const integrityOk = this.goodToGo.bind(this);
        Integrity.check(integrityOk,integrityFail);*/
    }

    bootFail() {
        console.log('fail');
    }

    goodToGo() {
        fetch('https://www.omdbapi.com/?i=tt2084970&plot=short&r=json').then(response =>{
            console.log(response);
            this.store.dispatch(appActions.stopSearching());
        });
        // curl 'http://www.omdbapi.com/?i=tt2084970&plot=short&r=json' -H 'Pragma: no-cache' -H 'Accept-Encoding: gzip, deflate, sdch' -H 'Accept-Language: en,es-419;q=0.8,es;q=0.6,pt;q=0.4,de;q=0.2,ru;q=0.2' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36' -H 'Accept: text/plain, */*; q=0.01' -H 'Referer: http://www.omdbapi.com/' -H 'X-Requested-With: XMLHttpRequest' -H 'Cookie: __cfduid=d9f8bdc4fe98bc8ca5b939ee8c222a66b1458963587' -H 'Connection: keep-alive' -H 'Cache-Control: no-cache' --compressed
        console.log('OK!!');
    }
}

export default new App;
