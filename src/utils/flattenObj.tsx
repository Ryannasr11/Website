const flattenObj = (obj: any, final = {}) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] != null) {
                flattenObj(obj[key], final);
            } else {
                final[key] = obj[key];
            }
        }
    }
    return final;
};

export default flattenObj;
