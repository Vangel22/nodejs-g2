const arr = ["a", 4, "b", 2, "c"];

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

for (let i = arr.length - 1; i >= 0; i--) {
  console.log("i", arr[i]);
}

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

//find -> finds the first in array and returns it
const res = arr.find((el) => el === "a"); //returns the first element that has the condition achieved
// const res = arr.find((el) => {
//     return el;
// });
// console.log("res", res);
const res2 = arr.find((el) => {
  if (el === "a") {
    return el;
  }
});
// console.log("res2", res2);

//() => {}
//function testFun(){}
//const fatArrow = () => {}
//const funcDec = function() {}
