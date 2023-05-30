//variables
//functions
//callbacks
//promises

//Three types of variables
// var const let

//var refers to global object
//let & const are block scoped

var test = "test";

function testFunc() {
  const testData = true; //string, number, boolean
  data = false;
  //const testData = [1, 2, 3];
  //[] {}
  let change = "string";
  change = 1;
  var test = "this is new value";
  var test = "test me";
}

function thisIsNew() {
  const testData = [1, 2, 3];
}

//after line 13 testFunc is written in memory

//thisIsRef is a variable that is referencing the function (testFunc) in memory
var thisIsRef = testFunc; //we are giving the address in memory

thisIsRef(); //this is a call

console.log(test); //"test test"

//CallStack
//test -> variable
//testFunc -> Function -> testData
//thisIsNew -> Function -> testData

//Types of functions
//function keyword -> normal

function normal() {
  console.log("normal function");
}
normal();

//fat arrow function
let arrowFunc = () => {
  console.log("arrowFunc");
};
arrowFunc();

//function declaration
const funcDec = function () {
  console.log("funcDec");
};
funcDec();

//Task -> make a function to sum up two numbers with the three types of functions
