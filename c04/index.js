const fs = require("fs");

//asynchronous language -> non blocking on a request
//event driven -> reacting to an action initiated by a user or computer system
//it enables writing Javascript on server side
//V8 engine - chromuim

//Callback Hell

// Callback - ES5
// Promise - ES6
// Async/Await - ES7

//fs enables file manipulation

// console.log("First");

const fileContents = fs.readFileSync("data.txt", "utf-8"); //synchronous
console.log(fileContents);

// console.log("Second");

fs.readFile("data.txt", "utf-8", (error, data) => {
  //async call
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

// console.log("Third");

fs.writeFileSync("greet.txt", "Hello Semos"); //greet.txt is created immediately

fs.writeFile("greet.txt", "Hello Semos 2", { flag: "a" }, (error) => {
  //flag with "a" option will append the data
  if (error) {
    console.log(error);
  } else {
    console.log("File was written");
  }
});

//Task 1
// 1. Make a file with your: fullname, age, profession
// 2. Read that file and display the contents
// Optional:
// write and read should be in local modules and imported in
