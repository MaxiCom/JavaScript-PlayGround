// Object references: It is a link to an object.
// Each variable hold an object reference that link to the same object!
// When the object changes, the variable referring to the object reflect the change!





const obj = {};
// 1.An object with a random identifier (x) is created in the Object Table with an empty implementation = {}
// 2.The identifier of the object is returned
// 3.The variable obj will hold the identifier of the object as value
// 4.The variable value cannot change

const a = obj;
// 1.The variable a will hold the value of the variable obj (which is the identifier of the object)
// 2.The variable value cannot change

// BOTH VARIABLES HOLD THE SAME OBJECT IDENTIFIER AS VALUE, THEY CONSEQUENTLY POINTS TO THE SAME OBJECT

obj.name = 'Max';
console.log(a.name);
