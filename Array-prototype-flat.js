// flat() is not a static method of Array, you need to call flat from an instance of Array!
array = Array();
console.log(array.flat());

// flat property is situated in the prototype of the instance of Array (not in the instance directly)
// If you set the prototype to null, you cannot access to flat anymore
// Object.setPrototypeOf(array, null);
// console.log(array.flat());






/*

tmp = Array();

An instance (object) is created from the Array class definition
The id of the instance is stored as a value of tmp

tmp -> x
x implementation: {}

The implicit [[Prototype]] of x points to another obj that contains properties!

But where does it point?
To another pre-instantiated object which is the prototype of all instance of the Array class.

*/

/*

Array:

array = new Array();
or
array = [];

Sub-Array elements:

array = [
    [
        // This is a sub-array element
        data: 42,
    ], [
        // This is a sub-array element
        data: 515,
    ]
];
*/


/*

The flat() method of Array instances creates a new array* with all sub-array elements concatenated into it*
recursively up to the specified depth*! (

Depth is the array depth:

[*] is depth: 0
[[*]] is depth: 1

etc...

The default depth of Array.flat() is 1

Array.flat() same as Array.flat(1);

*/
// Demo: Array.flat()
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat()); // same as arr1.flat(1)
// Expected output: [0, 1, 2, 3, 4]

const arr2 = [
    0,
    1,
    [
        2,
        [
            3,
            [
                4,
                5,
            ]
        ]
    ]
];

console.log(arr2.flat()); // same as array.flat(1)
// Expected output: [0, 1, 2, [3, [4, 5]]];

console.log(arr2.flat(2));
// Expected output: [0, 1, 2, 3, [4, 5]];

console.log(arr2.flat(Infinity));
// Expected output: [0, 1, 2, 3, 4, 5];

/*

The flat() method is a copying method, meaning it doesn't mutate the original array (this).

It creates a new Array object representing the mutations and return it!

*/
const arr3 = [
    1,
    [
        2
    ]
];
const arr4 = arr3.flat();

console.log(arr3); // UNCHANGED
console.log(arr4); // new Array object
console.log(arr3 === arr4); // Expected: false (Not the same object)




// Example with mutating method??

// Is array = [] is the same as array = new Array()?
// Is obj = {} is the same as obj = new Object()?


// new keyword? Mandatory?

// Infinity??
