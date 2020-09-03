/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    switch(size) {
        case 0:
            return "";
            break;
        case undefined:
            return string;
            break;
        default:
            return trim(string, size);
    }

    function trim(str, size) {
        if(str) {
            let arr = str.split("");
            const copyTmp = [...arr];
            const uniqArr = [...new Set(arr)];

            uniqArr.forEach((copy) => {
                let count = 0;
                for (const [index, value] of copyTmp.entries()) {
                    if(copy === value) {
                        count++;
                        if(count > size) {
                            arr[index] = "0";
                        }
                       
                    }
                }
            });

            return arr.filter((e) => e !== "0").join("");
        }

        return "";
    }
}
