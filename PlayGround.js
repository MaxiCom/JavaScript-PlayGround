/*

Object table:
x { str: 'Hello' }
y { __proto__: a (x ->) }

a // will store the id as value
= // will return the id
{ str: 'Hello' } // will create an object with this implementation in the object table with a random id

b // will store the id as value
= // will return the id
{ __proto__: a } // will create an object with this implementation in the object table with a random id (the [[Prototype]] will be the x obj

*/

a = {
    str: 'Hello'
}

b = {
    __proto__: a,
};

console.log(b.str)
