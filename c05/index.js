// CRUD
// Create Read Update Delete

// function greetMe() {
//   console.log("Hello");
// }

// function callMeBack(fn) {
//   fn();
// }

// callMeBack(greetMe);

//callMeBack => has a param called fn
// the param fn is actualy a function

//Spread operator
const student = {
  name: "Vangel",
  age: 23,
  faculty: "FINKI",
};

const studentNewData = {
  gender: "Male",
  graduationYear: 2022,
  age: 25,
};

const studentNew = {
  ...student,
  ...studentNewData,
};

console.log(studentNew);
