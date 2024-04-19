
function defaults(obj, defaultProps) {
    Object.keys(defaultProps).forEach((key) => {
        if (obj[key] === undefined) {
            obj[key] = defaultProps[key];
        }
    });
    return obj;
}
module.exports = defaults;
