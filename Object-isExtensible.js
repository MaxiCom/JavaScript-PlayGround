const obj = {};

console.log(Object.isExtensible(obj));
// Expected output: true

Object.preventExtensions(obj);

console.log(Object.isExtensible(obj));
// Expected output: false
