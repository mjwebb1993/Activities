// Select DOM Elements
// select all unordered list (ul) elements

let getElements = document.getElementsByTagName("ul");
let querySelector = document.querySelectorAll("ul");

console.log(getElements);
console.log(querySelector);
// select all the children of the body element
let children = document.querySelector("p").children;
console.log(children);

//Node Relationships
// select all the children of the body element
let body = document.querySelector("body").children;
console.log(body);

// select the parent element of the h1 node
let parent = document.querySelector("h1").parentElement;
console.log(parent)
//Changing Elements;
// select the img element and add a src attribute
document.querySelector("img").src =
  "https://i2.pickpik.com/photos/774/556/1024/odin-male-australian-shepherd-dog-thumb.jpg";

console.log(document.querySelector("img"));

// Creating Elements
// create a new unordered list (ul) element
const unorderedList =
    document.createElement("ul");

// remove the paragraph element in the nav-bar
let childToRemove =
    document.querySelector(".nav-bar > p");

childToRemove.remove();

// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(unorderedList);

// create two new list item (li) elements, and add some text to them
const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");

listItem1.textContent = "1st new list item";
listItem2.textContent = "2nd new list item";

// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(listItem1,);
document.querySelector(".nav-bar > ul").appendChild(listItem2);

// Event Listeners
document
  .querySelector("#dog-picture")
  .addEventListener("dblclick", () => alert("the image was double clicked"));

// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color

document
  .querySelector("#class-schedule-list")
  .addEventListener(
    "mouseover",
    event => (event.target.style.backgroundColor = "red")
  );

// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed

document
  .querySelector("body")
  .addEventListener("keypress", event => console.log("The " + event.key + " was presse!"));

// change the font color of the h1 element

document.querySelector("h1").style.color = "yellow";

// Add Content
const classes = document.querySelectorAll(".class-week");

classes.forEach(
  (htmlElement, i) =>
    (htmlElement.textContent = `text content is changed, class week ${i}`)
);
