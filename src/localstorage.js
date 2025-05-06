
/**
* @param {string} key
* @param {string} value
*/
export function SaveLocalStorage(key, value) {
    // console.log(value);
     localStorage.setItem(key, value);
 }
 
 /**
 * @param {string} key
 * @returns {string}
 */
 export function GetLocalStorage(key) {
     return localStorage.getItem(key);
 }
 