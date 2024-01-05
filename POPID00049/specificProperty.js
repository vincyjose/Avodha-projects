// Write a JavaScript function to get the values of a specific property in an object as an array

function getPropertyValuesAsArray(obj, property) {
    let valuesArray = [];

    // Check if the property exists in the object
    if (obj.hasOwnProperty(property)) {
        // If the property exists, add its value to the array
        valuesArray.push(obj[property]);
    }

    return valuesArray;
}

// Example usage:
let myObject = {
    name: 'vichu',
    age: 30,
    city: 'Ernakulam'
};

let propertyName = 'age';
let propertyValues = getPropertyValuesAsArray(myObject, propertyName);

console.log(`Values of property '${propertyName}':`, propertyValues);
