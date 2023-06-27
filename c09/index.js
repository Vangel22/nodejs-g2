const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let data = {
    fullName: "Student name", //change this
    array: [""],
    books: [{ author: "", year: 2012 }],
  };
  res.render("index", data);
});

//display the new data in index.ejs

app.listen(8080, (err) => {
  if (err) console.log(err);
  console.log("Server started");
});

//Homework
// 1. test-hw -> change html files with ejs
// 2. Make the configuration in index.js -> app.set -> for ejs to be able to work with your app
// 3. res.render(analiza)
// 4. res.render(analiza-form)
