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

//display the new data by changing the fields in index.ejs

app.listen(8080, (err) => {
  if (err) console.log(err);
  console.log("Server started");
});
