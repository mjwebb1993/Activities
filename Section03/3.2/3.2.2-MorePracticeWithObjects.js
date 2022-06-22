/*
  3.2.2-MorePracticeWithObjects#index.js
  ========================================
*/

// bracket and dot notation
//-------------------------

const key = "1";
const obj = {
  key: "the key is 'key'",
  1: "the key is 1"
};

// what will the following lines print?
console.log(obj[key]);
console.log(obj["key"]);
console.log(obj["1"]);


/*
Create an object with at least four properties, each with a different data type
Name one of the four properties "collection" and set its value to an Array or Object
*/

const something = {
  collection: {
    love: "Self",
    hate: 0,
    collection: [1, 2, 3],
    truth: true
  },
  veggies: "broccoli, spinach, squash",
  meat: false,
  snacks: 3
};

// access a value in in "collection" property
  console.log("Always love your", something.collection.love);


// Nested Arrays and Objects
//===========================

// below is an array of strings with 5 elements
const keys = ["key", "1", "method", "favorites", "list"];

// below is an object with 2x key-value pairs
const newObj = {
  key: "the key is 'key'",
  1: "the key is 1"
};

// adding a method to the object `newObj`
newObj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};

// add a nested object key-value pair to the object `newObj`

// fill in your favorite movie and color below
newObj["favorites"] = {
  movie: "The Shining",
  number: 19,
  color: "gray"
};
//
// add a complex array to the object `newObj`
newObj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

/*
How many lines will the following for...of statement print?
What do you expect to see on each line?
*/

for (let key of keys) {
  console.log(`The key is: ${key}, and value is: ${newObj[key]}`);
}

// use a template literal to print a sentence about your favorite movie and color
console.log(
  `My favorite movie is ${newObj.favorites.movie}, and my favorite color is ${newObj.favorites.color}.`
);

// access the values "b", 4, and 6 from obj.list

console.log("List 1 = ", newObj.list[1]);
console.log("List 4.1 =", newObj.list[4][1]);
console.log("List 5.f = ", newObj.list[newObj.list.length - 1].f);
