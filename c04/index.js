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
// console.log(fileContents);

// console.log("Second");

fs.readFile("data.txt", "utf-8", (error, data) => {
  //async call
  if (error) {
    // console.log(error);
  } else {
    // console.log(data);
  }
});

// console.log("Third");

fs.writeFileSync("greet.txt", "Hello Semos"); //greet.txt is created immediately

fs.writeFile("greet.txt", "Hello Semos 2", { flag: "a" }, (error) => {
  //flag with "a" option will append the data
  if (error) {
    // console.log(error);
  } else {
    // console.log("File was written");
  }
});

//Task 1
// 1. Make a file with your: fullname, age, profession
// 2. Read that file and display the contents
// Optional:
// write and read should be in local modules and imported in

// Promise -> async operation
// State of promise: fulfilled, rejected, pending
// Promise will be used when a request is made
// Read, write

//step 1
// const fileWrite = () => {
// }

//step 2
// const fileWrite = () => {
//     return new Promise();
// }

//step 3
// const fileWrite = () => {
//   return new Promise(() => {});
// };

//step 4
// const fileWrite = () => {
//   return new Promise((success, fail) => {});
// };

//step 5
// const fileWrite = () => {
//   return new Promise((success, fail) => {
//     fs.writeFile("data.txt", "Node Js course", (err) => {
//       if (err) console.log(err);
//       console.log("File written successfully");
//     });
//   });
// };

//fileWrite -> returns Promise -> callback function -> two params for success and fails

//step 6
// const fileWrite = () => {
//   return new Promise((success, fail) => {
//     fs.writeFile("data.txt", "Node Js course", (err) => {
//       if (err) {
//         return fail(err);
//       } else {
//         return success();
//       }
//     });
//   });
// };

//step 7
const fileWrite = (filename, data) => {
  return new Promise((success, fail) => {
    fs.writeFile(filename, data, (err) => {
      if (err) {
        return fail(err);
      } else {
        return success();
      }
    });
  });
};

//then -> when the result of the Promise is successful
//catch -> when the result of the Promise has failed
//finally -> will always be executed

fileWrite("test1.txt", "this is test 1")
  .then(() => {
    console.log("File written successfully");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    //this will always be executed
    console.log("Finally executed!");
  });

// fileWrite("test1.txt", "this is test 1");
// fileWrite("test2.txt", "this is test 2");

//IIFE - Immediately invoked function expression

(async () => {
  await fileWrite("test1.txt", "this is test 1");
  await fileWrite("test2.txt", "this is test 2");
  await fileWrite("test3.txt", "this is test 3");
  await fileWrite("test4.txt", "this is test 4");
})();

const main = async () => {
  await fileWrite("test1.txt", "this is test 1");
  await fileWrite("test2.txt", "this is test 2");
  await fileWrite("test3.txt", "this is test 3");
  await fileWrite("test4.txt", "this is test 4");
};

main();

//Homework
// 1. Local module for file write and read
// 2. Use append to append data and then read the new data appended
// 3. Read the new data when change has been made
// 4. Plus: async/await should wrapped in try/catch
