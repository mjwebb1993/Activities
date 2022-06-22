/*
  3.2.4-ReferenceAndValue#index.js
  =================================
*/
//
// comparing and passing by reference and value
// determine whether each log will print true or false

console.log(4 === 4);   // true
console.log("Hello, world" === "Hello, world");   // true

let x = false;
let y = x;
console.log("1st comparison... ", x === y);   // true

x = !x;
console.log("2nd comparison... ", x === y);   // false

console.log("Comparing like arrays... ", [1, 2, "c"] === [1, 2, "c"]);    // false

console.log("Comparing empty objects... ", {} === {});    // false

y = { id: 1 };
x = y;
console.log("3rd comparison... ", x === y);   // true

y.id += 1;
console.log("4th comparison... ", x.id === y.id);   // true

