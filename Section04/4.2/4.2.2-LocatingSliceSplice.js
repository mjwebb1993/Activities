/*
  4.2.2-LocatingSliceSplice.js
  =============================
*/

const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA = arr.indexOf("a");
let firstB = arr.indexOf("b");
let firstC = arr.indexOf("c");

// find the last index of "a", "b", and "c"
let lastA = arr.lastIndexOf("a");
let lastB = arr.lastIndexOf("b");
let lastC = arr.lastIndexOf("c");

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

function removeDuplicates(array, duplicatedValue) {
  let firstIndex = array.indexOf(duplicatedValue);
  let lastIndex = array.lastIndexOf(duplicatedValue);
  while (firstIndex !== lastIndex) {
    array.splice(lastIndex, 1);
    lastIndex = array.lastIndexOf(duplicatedValue);
  }
  return array;
}

console.log(arr);

removeDuplicates(arr, "a");
console.log(arr);

removeDuplicates(arr, "c");
console.log(arr);

removeDuplicates(arr, "b");
console.log(arr);

// first 0, last 6
// first 0, last 3
// first 0, last 1
// first 0, last 0


//ANother example...
const cat = ["g","h","i", "i", "y", "t","y", "h", "u","i","o","y","y", "h"];

console.log("\n The original cat array ...", cat);

console.log("\n Result after duplicate y's removed from array 'cat'... ", removeDups(cat, "y"));

console.log("\n Result after duplicate i's removed from array 'cat'... ", removeDups(cat, "i"));

console.log("\n Result after duplicate h's removed from array 'cat'... ", removeDups(cat, "h"));
