let namee = null;
console.log(namee); // null

let age;
console.log(age); // undefined

let name1 = null;

console.log(typeof name1); // null

//converting primitives to non-primitives
let name = 12;

let newname = new Number(name);
console.log(typeof newname.valueOf()); // object
