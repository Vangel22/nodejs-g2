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

app.listen(8080, (err) => {
  if (err) console.log(err);
  console.log("Server started");
});
