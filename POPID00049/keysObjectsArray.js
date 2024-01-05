// Write a JavaScript function to clone an object (create a copy).


function getObjectKeysAsArray(obj) {
    return Object.keys(obj);
}

// Example usage:
let myObject = {
    name: 'Jo',
    age: 40,
    city: 'Banglore'
};

let keysArray = getObjectKeysAsArray(myObject);
console.log("Object keys as an array:", keysArray);


