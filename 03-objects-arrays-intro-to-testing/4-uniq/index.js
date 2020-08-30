/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    if (arr && arr.length) {
        let set = new Set();
        for (let i = 0, max = arr.length; i < max; i += 1) {
            set.add(arr[i]);
        }
    
        return [...set];
    }

    return [];
}
