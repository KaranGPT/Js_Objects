

const invert = require('./invert');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const invertedObject = invert(testObject);

console.log(invertedObject); 
