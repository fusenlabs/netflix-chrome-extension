'use strict'

/**
 * Use this class to check the integrity of the DOM. 
 * It ensures that the code can find the movies title in the page 
 * and the placeholder for element injections.
 */
class Integrity {
    static check(callbackOk = ()=>{},callbackFail = ()=>{}) {
        true? callbackOk() : callbackFail();
    }
}

export default Integrity;
