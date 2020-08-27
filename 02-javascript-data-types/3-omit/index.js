/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    Object.entries(obj).filter((objItem) => {
        fields.filter((fieldItem) => {
            if(objItem[0] === fieldItem) {
                delete obj[fieldItem];
            }
        });
    });

    return Object.assign({}, obj);
};
