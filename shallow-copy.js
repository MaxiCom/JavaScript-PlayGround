// [] = new Array()
const ingredientList = ["noodles", {
    list: ["eggs", "flour", "water"],
}];

// Array.from performs a shallow copy
// it copies the object and the top-level properties but keep the same properties' values in both object
// The properties' values that are object reference will point to the same target in both object!
const ingredientListCopy = Array.from(ingredientList);

console.log(ingredientListCopy);
// [ 'noodles', { list: ['eggs', 'flour', 'water' ] } ]
