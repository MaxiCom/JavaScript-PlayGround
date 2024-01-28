// [] = new Array()
const ingredientList = ["noodles", {
    list: ["eggs", "flour", "water"],
}];

// Array.from performs and return a shallow copy
// it copies the object and the top-level properties but keep the same properties' values in both object
// The properties' values that are object reference will point to the same target in both object!
const ingredientListCopy = Array.from(ingredientList);

console.log(ingredientListCopy);
// [ 'noodles', { list: ['eggs', 'flour', 'water' ] } ]

// Re-assigning the value of a nested property will be visible in both objects
ingredientListCopy[1].list = ['rice flour', 'water'];
console.log(ingredientList[1].list);

// Re-assigning the value of a top-level property will only be visible in the changed object!
ingredientListCopy[0] = 'rice noodles';
console.log(ingredientList[0]); // noodles
