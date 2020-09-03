/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
    if (typeof obj === "object") {
        const arr = Object.entries(obj);
        const result = arr.map(([key, value]) => [key, value].reverse());
        const newObj = {};

        for (const [key, value] of result) {
            newObj[key] = value;
        }

        return newObj;
    }

    return;
}
