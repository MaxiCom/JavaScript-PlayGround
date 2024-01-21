a = new Object();

// DEPRECATED: __proto__
// Use: Object.getPrototypeOf() instead
console.log(a.__proto__ === Object.getPrototypeOf(a));
