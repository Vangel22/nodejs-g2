const express = require("express");
const { getAnalysis, postAnalysis } = require("./controller");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/analiza", getAnalysis);

app.post("/analiza", postAnalysis);

app.listen(8080, (err) => {
  if (err) console.log("err", err);
  console.log("Server started!");
});
