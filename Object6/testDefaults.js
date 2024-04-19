
const defaults = require('./defaults');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const defaultProps = { name: 'Unknown', age: 0, location: 'Unknown', alias: 'Batman' };

console.log(defaults(testObject, defaultProps));

