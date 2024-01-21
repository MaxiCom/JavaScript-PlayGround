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
