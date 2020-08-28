/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {
    const tmpArr = arr.sort((a, b) => {
        if(param === 'asc') {
            return a.localeCompare(b, {}, {caseFirst: 'upper'});
        } else {
            return !a.localeCompare(b) ? a.localeCompare(b, {}, {caseFirst: 'upper'}) : -(a.localeCompare(b, {}, {caseFirst: 'upper'}));
        }
    });
    return tmpArr.slice();
}
