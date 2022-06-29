/*
  4.2.1-PopPushShiftUnshift.js
  =============================
*/

const nums = [6, 5, 2, 3, 4, 1, 0];
console.log("Original nums", nums);

// remove each of the last two items with pop(), saving each item to a variable
let popreturn1 = nums.pop();
let popreturn2 = nums.pop();

console.log("PopReturn1...", popreturn1, "PopReturn2...", popreturn2, "Nums...", nums);

// remove each of the first two items with shift(), saving each item to a variable
let shiftreturn1 = nums.shift();
let shiftreturn2 = nums.shift();

console.log("ShiftReturn1...", shiftreturn1, "ShiftReturn2...", shiftreturn2, "Nums...", nums);

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(shiftreturn2, shiftreturn1);
nums.unshift(popreturn1, popreturn2);

console.log("New Nums after using unshift and push ...", nums);
