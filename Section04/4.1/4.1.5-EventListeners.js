/*
  4.1.5-EventListeners.js
  ========================
*/

// add an event listener to the dog picture that listens for a "dblclick" and gives an alert

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
