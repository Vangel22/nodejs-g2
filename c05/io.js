const fs = require("fs");

//Promises have 3 states
// fulfilled, pending, rejected

//resolve(data) => where data is a argument from the readFile
//reject(error) => where error is a argument from the readFile on fail

//resolve and reject are callback arguments

const read = async () => {
  //resolve is a function
  //reject is a function
  return new Promise((resolve, reject) => {
    fs.readFile("data.json", "utf-8", (err, data) => {
      if (err) {
        return reject(err);
      } else {
        data = JSON.parse(data);
        return resolve(data);
      }
    });
  });
};

const write = async (data) => {
  return new Promise((resolve, reject) => {
    data = JSON.stringify(data);
    fs.writeFile("data.json", (err) => {
      if (err) {
        return reject(err);
      } else {
        return resolve();
      }
    });
  });
};

module.exports = {
  read,
  write,
};
