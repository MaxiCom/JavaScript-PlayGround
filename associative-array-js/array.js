var simpleArr = [1, 2, 3]
var associativeArr = { one: 1, two: 2, three: 3}

// Treated as an array
console.log(simpleArr[0])
console.log(associativeArr['one'])

// But implicitly the associative array was created as an object not as an array type, 
// because of the keys that have values
//
// Each time you assign values to keys in a variable of type Array, the array is transformed
// into an object
console.log(typeof(simpleArr))
console.log(typeof(associativeArr))
