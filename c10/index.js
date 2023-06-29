const express = require("express");
const {
  getForm,
  getBrishi,
  postForm,
  getStudenti,
} = require("./controllers/formular");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true })); //body-parser
//It is used when we have req.body => POST, PUT, PATCH
//when extended is TRUE req.body can be any type (string, object, array, number, undefined)
//when extended is FALSE req.body can be only string or array
// "" or []
app.use(express.static("public")); //React.js
//public folder contains data that the server will not process
//Static assets refer to files that are served to the
//client without any modification by the server.

app.get("/form", getForm);
app.post("/form", postForm);
app.get("/studenti", getStudenti);
app.get("/brishi", getBrishi);

// const array = [1, 2, 3, 4, 5];
// array.map((_, index) => console.log(index));

app.listen(10000, (err) => {
  if (err) console.log(err);
  console.log("Server stared at port: 10000");
});

// 1. In postForm method add - fakulteti property
// 2. Add the field in "formular.ejs"
// 3. Display fakulteti of a single student in "studenti.ejs"
