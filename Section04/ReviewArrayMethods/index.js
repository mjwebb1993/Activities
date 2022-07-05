// Same from ReviewDOM, I just like the Aussie
document.querySelector("img").src =
  "https://i2.pickpik.com/photos/774/556/1024/odin-male-australian-shepherd-dog-thumb.jpg";


// Utilize Different Array Methods

const classes = document.querySelectorAll(".class-week");
const searchTerm = 'javascript';
function searchJS(){
  classes.forEach(htmlElement => {
    let search = htmlElement.textContent.toLowerCase().includes(searchTerm);

    if (search){
      // let
      return htmlElement.style.color = 'white';
    }
  });
}
searchJS();

const objOne = {
  first: 1,
  second: 2,
  third: 3,
  fourth: [4, 5, 6],
  fifth: {
    subFirst: "one",
    subSecond: "two",
    subThird: "three"
},
}
const objTwo = {
  first: 10,
  second: 20,
  third: 30,
  fourth: [40, 50, 60],
  fifth: {
    subFirst: "ten",
    subSecond: "twenty",
    subThird: "thirty"
},
}
const objThree = {
  first: 15,
  second: 25,
  third: 35,
  fourth: [45, 55, 65],
  fifth: {
    subFirst: "fifteen",
    subSecond: "twenty five",
    subThird: "thirty five"
},
}
const arrOfObj = [];
arrOfObj.push(objOne, objTwo, objThree);
console.log(arrOfObj);
// Map

// 1.1
// Create a new array of that consists of pairs of subFirst and subThird strings
const newArr = arrOfObj.map(obj => {
  let subOne = obj.fifth.subFirst;
  let subThree = obj.fifth.subThird;

  return [subOne, subThree];
})

// 1.2
// Create a new array that consists of each objects value from the fourth key as their own property with the key "pairs"
const fourthArr = arrOfObj.map((obj) => {
  let newObj = {
    pairs: obj.fourth
  }
  return newObj;
  });

// Filter

// 1.3
// Using arrOfObj, create a new array by filtering out values of the "second" key that are odd
const evenSecond = arrOfObj.filter(obj => obj.second % 2 === 0);
console.log(evenSecond);

