/*
	2.2.1-Evr-JSVariablesAndPrimitives.js
	=====================================
*/

// create a constant variable (const)
const myName = "Martini";

// create a variable that can be reassigned (let)
let age = 31;

// create three variables and assign them values of different data types (=)
let myNumber = 505;
let isMarried = true;
let dogsName = "Gilbert";

// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log(typeof myName);
console.log(typeof age);

// change the value referenced by a variable (dynamic typing)
myNumber = 506;
console.group(typeof myNumber);
myNumber = "three";
console.group(typeof myNumber);

// print the type of the variable you just changed (typeof)

// create variables and give them values to complete the sentences that will print
// ? which variables need to be created?
// ? what type of data needs to go in each variable?
let myName = "John";
let language = "JavasScript";
let weeksOfPractice = 1;
let masterStatus = false;

console.log("Hello, my name is " + myName + ", and I am learning " + language);
console.log(  "I have been practicing for only " +  weeksOfPractice +
	" weeks, so my status as a master is: " + masterStatus);
