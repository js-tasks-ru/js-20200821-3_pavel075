/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    return Object.fromEntries(
        Object.entries(obj).filter((objItem) => {
            for(let i = 0, max = fields.length; i < max; i += 1) {
                if(fields[i] === objItem[0]) {
                    return objItem;
                }
            }
        })
    );
};
