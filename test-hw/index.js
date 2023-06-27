const express = require("express");
const { getAnalysis, postAnalysis } = require("./controllers"); //this only works if the file is called index.js
//otherwise we need the whole path i.e also the name of the file

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/analiza", getAnalysis);
app.post("/analiza", postAnalysis);

app.listen(10000, (err) => {
  if (err) console.log(err);
  console.log("Server started!");
});
