const arr = ["a", 4, "a", 2, "c"];
//consist of strings and numbers

//Arrays start from index 0;

// 1 < 5
// 2 < 5
// 3 < 5
// 4 < 5
// 5 < 5 - this will fail

// arr[0] = 5
// arr[1] = 4

// for (let i = 0; i < arr.length; i++) {
//   console.log("i", arr[i]);
// }

//Loop the array in reverse
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log("i", arr[i]);
// }

// for (let el of arr) {
//this for will read the values
//   console.log(el);
// }

// for (let el in arr) {
//this for will read the indexes
//   console.log(el);
// }

//All of the function methods bellow are loops
// find, map, forEach, reduce, sort, filter

//find -> finds the first in array and returns it that matches the condition
const res = arr.find((el) => el === "a"); //returns the first element that has the condition achieved
// const res = arr.find((el) => {
//     return el;
// });

const res2 = arr.find((el) => {
  if (el === "a") {
    return el;
  }
});

//returns new(whole) array
// const mapEl = arr.map((el) => {
//   if (el === "a") return el;
// });

// const mapEl = arr.map((el) => el);
// console.log("map El", mapEl);

//forEach loops through the array and doesn't return a result
// const loops = arr.forEach((el) => el);
// console.log("loops", loops);

const arrNums = [1, 2, 7, 10, 3, 4, 5, 6, 8, 9];

// const reducer = arrNums.reduce((acc, curr) => acc + curr);
// console.log("reducer", reducer);

// const sortData = arrNums.sort((a, b) => {
//   if (a < b) return -1;
//   if (a > b) return 1;
//   if (a === b) return 0;
// });

// console.log("sortData", sortData);

// const filterData = arrNums.filter((el) => el > 5);

// console.log("data", filterData);

//() => {}
//function testFun(){}
//const fatArrow = () => {}
//const funcDec = function() {}

//Objects
const student = {
  grades: [7, 8, 10, 6, 6],
  name: "Test User",
  age: 20,
  uni: "FINKI",
  getAverageGrade: () => {},
};

//fetch

//K, V

//Write down the function for getting the average grade
