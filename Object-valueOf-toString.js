// Object Prototype Properties

// valueOf()
// toString()
console.log({}.valueOf());
console.log({}.toString());

// valueOf() and toString() exist to be polymorphic so you can expect the object to define its own implementation.
console.log({
    valueOf: () => 42,
}.valueOf());

console.log({
    toString: () => 'Heyyy',
}.toString());


// However valueOf and toString are usually called implicitly through type conversion (you don't need to call them yourself in the code)!
console.log({
    toString: () => 'Heyyy',
});
