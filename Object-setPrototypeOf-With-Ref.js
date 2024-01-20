const obj = {};
const parent = {
    foo: 'bar',
};

ref = Object.setPrototypeOf(obj, parent);

console.log(ref.foo);
