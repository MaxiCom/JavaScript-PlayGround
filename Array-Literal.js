// The [] notation is called an array literal
// It is a shorthand way to create an array
// It allows you to define an array and its elements in a concise manner
var myArray = [1, 2, 3, 4, 5];

// new Array() notation is a constructor for creating arrays
// new Array() create an instance (instantiate) of the Array class (the result is an object)
var myArray1 = new Array(1, 2, 3, 4, 5);
var myArray2 = new Array(); // creates an empty array

var myArray = new Array(3); // creates an array with length 3, but all elements are initially undefined

// Differences

// When using new Array(), if you pass a single non-negative integer as an argument,
// it creates an array with that length. However, if you pass multiple arguments,
// it creates an array with those elements.
var arr1 = new Array(3);    // Creates an array with length 3, but all elements are initially undefined.
var arr2 = new Array(1, 2, 3); // Creates an array with elements [1, 2, 3].

// On the other hand, the [] notation always creates an array with the specified elements.
var arr3 = [3];   // Creates an array with a single element, 3.
var arr4 = [];     // Creates an empty array.

// There's also a slight difference in performance, where using [] is generally faster than new Array().

// In practice, the array literal [] is more commonly used due to its simplicity and clarity.
// However, both methods are valid, and the choice between them often depends on the specific use case and personal preference.
