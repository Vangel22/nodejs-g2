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
  uni: {
    name: "UKIM",
    faculty: "FINKI",
    subject: "Software Engineer",
  },
  getAverageGrade: () => {
    let sum = 0;
    for (let grade of student.grades) {
      sum += grade;
      //sum = sum + grade
    }
    return sum / student.grades.length;
  },
};

// console.log(student.uni.faculty);
//fetch

//K, V

//Write down the function for getting the average grade

//Callback
// const callMeBack = () => {
//   console.log("Hi");
// };

// const greetMe = (fn) => {
//   fn();
// };

// greetMe(callMeBack);

function isEven(number) {
  return number % 2 === 0;
}

function isOdd() {}

function filter(numbers, fn) {
  let results = [];
  for (let num of numbers) {
    if (fn(num)) {
      results.push(num);
    }
  }
  return results;
}

// console.log(filter([1, 2, 3, 4, 5], isEven));

// Homework
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

//let sumaOdProsek = [0].prosek + [3].prosek + [8].prosek / 3

let sumaZaGrad = [];
for (let i = 0; i < studenti.length; i++) {
  let sumaProsek = 0;
  for (let j = 1; j < studenti.length; j++) {
    if (studenti[i].grad === studenti[j].grad) {
      sumaProsek += studenti[i].prosek;
    }
  }
  sumaZaGrad.push({ grad: studenti[i].grad, prosek: sumaProsek });
}

const sorted = sumaZaGrad.sort((a, b) => {
  if (a.prosek < b.prosek) return -1;
  if (a.prosek > b.prosek) return 1;
  return 0;
});

// Домашна
// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
// 4. Градови подредени по групна висина на просек.
// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.

const endsWithA = studenti.filter((stud) => stud.ime.endsWith("a")); //
const notWithA = studenti.filter((stud) => !stud.ime.endsWith("a")); //

const endsWithAAverage = endsWithA.reduce((acc, curr) => acc + curr.prosek);
const notWithAAverage = notWithA.reduce((acc, curr) => acc + curr.prosek);

console.log("a", endsWithAAverage);
console.log("not a", notWithAAverage);
