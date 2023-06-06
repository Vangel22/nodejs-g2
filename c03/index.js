const fs = require("fs"); //fs is a core module in NodeJS, for file manipulation
const { printMe } = require("./test"); //local module are created by us
const { Validator } = require("node-input-validator"); //third party package because we installed it from the net

const person = {
  name: "Test Semos",
  age: 12,
  city: "Skopje",
};

// Object destructuring
const { name, age, city } = person;

//../ is same as cd ..
// ./ looks for the content inside the current folder

//Promises
//Nodejs
//HTTP

//Callbacks -> ES5 -> Callback hell
//Promises -> ES6
//Async/await -> ES7 -> Syntactic sugar of promises

//Promise states
// fulfilled -> request is successfull and data is delivered
// rejected -> request failed or access denied
// pending -> on request

//step 1
// const writeFile = () => {

// }

//step 2
// const writeFile = () => {
//     return new Promise();
// }

//step 3
// const writeFile = () => {
//   return new Promise(() => {});
// };

//step 4
// const writeFile = () => {
//   return new Promise((success, fail) => {});
// };

//step 5
const writeFile = () => {
  return new Promise((success, fail) => {
    // fs.writeFile("data.txt", "TEST", (err) => {
    //   if (err) return fail(err);
    //   return success();
    // });
  });
};

// fs => file system is a core module
// to use it we need to init a Nodejs project
// we init Nodejs project with -> npm init -y
// package.json is created

// CRUD
// Create Read Update Delete
const studenti = [
  { ime: "Bojan", prosek: 7.5, grad: "Skopje" }, //[0] => {}
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Bitola" },
  { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
  { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
  { ime: "Vancho", prosek: 10, grad: "Tetovo" },
  { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
  { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

const studentNames = studenti.map((stud) => stud.ime);

function getAverageAbove7() {
  return studenti.filter((stud) => stud.prosek > 7);
}

function deleteFromSkopje() {
  return studenti.filter((stud) => stud.grad !== "Skopje");
}

//after executing getAverageAbove7 update the DB

//Homework
//1. writeFile with fs => core module
//2. make a hello world function and require it => local module
//3. find some package on npmjs.com and require it => third party module
