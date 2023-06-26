// const http = require("http")
// const url = require("url")
const express = require("express");

const app = express();

// app.use(express.json());
app.use(express.urlencoded({ extended: false })); //POST, PUT

//get, post, put, patch, delete

// const server = http.createServer( req.method)

app.get("/", (req, res) => {
  res.send("Hello Semos Students");
});

app.get("/hello/:name", (req, res) => {
  //queryString starts from ?
  //req.params
  //req.query

  res.send(req.params);
});

//req.body

// a op b

app.get("/calculator/:op/:a/:b", (req, res) => {
  const { a, b, op } = req.params;
  let result;
  switch (op) {
    case "sobiranje":
      result = Number(a) + Number(b);
      res.end(`${result}`);
      break;
    case "odzemanje":
      result = Number(a) - Number(b);
      res.end(`${result}`);
      break;
    case "mnozenje":
      result = Number(a) * Number(b);
      res.end(`${result}`);
      break;
    case "delenje":
      result = Number(a) / Number(b);
      res.end(`${result}`);
      break;
    default:
      res.end("OK");
  }
});

app.listen(8080, (err) => {
  if (err) console.log("Greska", err);
  console.log("Server started at port 8080");
});
