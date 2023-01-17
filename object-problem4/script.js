// Create an object, then write a JavaScript function 
// that checks whether an object contains the specified key.

const fruitColors = {
    Banana       : 'Yellow',
    Kiwi         : 'Green',
    Strawberry   : 'Red',
    Orange       : 'Orange',
}

// write a function that takes in the object and key we are looking for
function findKey(obj, key) {
    // this method is a boolean and will return true or false
    return obj.hasOwnProperty(key)
}

console.log(findKey(fruitColors, 'Kiwi'))