// [] = new Array()
const ingredientList = ["noodles", {
    list: ["eggs", "flour", "water"],
}];
const ingredientListCopy = Array.from(ingredientList);

console.log(ingredientListCopy);
// [ 'noodles', { list: ['eggs', 'flour', 'water' ] } ]
