const person1 = {
    name: "vincy",
    gender: "female"
};
const person2 = {
    name: "jose",
    gender: "male",
    place: "ernakulam"
};

// function mergeObjects(obj1, obj2) {
//     return {...obj1, ...obj2};
// }

// const mergedObjects = { ...person1, ...person2};
// console.log("Merged objects are :" mergedObjects)
// console.log(person2)
//  console.log(person1);
function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}
const mergedObjects = mergeObjects(person1, person2);
console.log(mergedObjects);
