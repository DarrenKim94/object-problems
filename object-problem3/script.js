// Create an object with three items in it, then write a JavaScript function
// that accepts an object and tells you the length (tells you how many
// items are in it) of the object.

function objectLength(obj) {
    // return keys using Object.keys
    // get the length of the keys by using the .length method
     return Object.keys(obj).length
}

const fruitColors = {
    Strawberry : 'Red',
    Banana     : 'Yellow',
    Kiwi       : 'Green'
}

console.log(objectLength(fruitColors))
