// Create a sample object, then write a JavaScript function that deletes the property of an object passed to it.
// Your JavaScript function should take in two parameters, the object and the key/property you want to delete.


// Create an object
let playerStats = {
    name  :'Kobe Bryant',
    ppg   : 26,
    apg   : 5,
    rpg   : 5,
    spg   : 1,
    tpg   : 3,
    other : ['5 rings', '1 mvp', '12 all-stars']
}

// create a function with two parameters
function deleteKey(object, key) {
    // delete the key parameter in the object
    delete object[key];
    // return the new object without deleted key
    return object
}

deleteKey(playerStats, 'other')