// Write a JavaScript function to clone an object (create a copy).


function cloneObject(obj) {
    // Using the spread operator to create a shallow copy of the object
    return { ...obj };
}

// Example usage:
let originalObject = {
    name: 'Jo',
    age: 40,
    city: 'Ernakulam'
};

let clonedObject = cloneObject(originalObject);

console.log("Original object:", originalObject);
console.log("Cloned object:", clonedObject);
