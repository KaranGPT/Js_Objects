
const mapObject = require('./mapObject');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };


function addOne(value) {
    return value + 1;
}

console.log(mapObject({ age: 36 }, addOne)); 


console.log(mapObject(testObject, addOne)); 
