//Write a JavaScript function to check if two objects have the same properties.

function haveSameProperties(obj1, obj2) {
    // Get the keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Check if all keys in obj1 exist in obj2
    for (let key of keys1) {
        if (!obj2.hasOwnProperty(key)) {
            return false;
        }
    }

    // Check if all keys in obj2 exist in obj1
    for (let key of keys2) {
        if (!obj1.hasOwnProperty(key)) {
            return false;
        }
    }

    return true;
}

// Example usage:
let obj1 = { name: 'Jo', age: 30, city: 'Banglore' };
let obj2 = { age: 30, city: 'Banglore', name: 'Jo' };
let obj3 = { name: 'vichu', age: 25, country: 'Ernakulam' };

console.log("obj1 and obj2 have the same properties:", haveSameProperties(obj1, obj2));
console.log("obj1 and obj3 have the same properties:", haveSameProperties(obj1, obj3));




