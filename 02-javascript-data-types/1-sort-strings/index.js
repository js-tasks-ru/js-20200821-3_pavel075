/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {
    if(Array.isArray(arr) && arr.length) {
        const tmpArr = arr.sort((a, b) => {
            if(param === 'asc') {
                return a.localeCompare(b);
            } else {
                return !a.localeCompare(b) ? a.localeCompare(b) : -(a.localeCompare(b));
            }
        });

        for(let i = 0, max = tmpArr.length; i < max; i += 1) {
            if(tmpArr[i + 1]) {
                if(tmpArr[i].toLowerCase() === tmpArr[i + 1].toLowerCase()) {
                    tmpArr[i] = tmpArr[i][0].toUpperCase() + tmpArr[i].slice(1);
                    tmpArr[i + 1] = tmpArr[i][0].toLowerCase() + tmpArr[i].slice(1);
                }
            }
        }

        return tmpArr.slice();
    }

    return [];
}
