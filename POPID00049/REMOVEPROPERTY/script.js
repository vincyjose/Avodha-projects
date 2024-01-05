function removeObjectProperty(obj, property) {
    if (obj.hasOwnProperty(property)) {
        delete obj[property];
        console.log(`Property '${property}' removed successfully.`);
    } else {
        console.log(`Property '${property}' does not exist in the object.`);
    }
}



