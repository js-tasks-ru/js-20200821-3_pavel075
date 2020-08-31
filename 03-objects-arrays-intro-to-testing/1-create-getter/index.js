/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const pathArr = path.split(".");
    
    function getter(obj) { 
        let prop = pathArr.shift();
        
        if (prop in obj && obj.hasOwnProperty(prop)) {
            if (typeof obj[prop] === "object") {
                return getter(obj[prop]);
            } else {
                return obj[prop];
            }
        } else {
            return undefined;
        }
    }

    return getter;
}
