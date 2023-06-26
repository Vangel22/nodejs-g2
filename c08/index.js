// const http = require("http")
// const url = require("url")
const express = require("express");
const { getCalculator, postCalculator } = require("./controllers/calculator");

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

app.get("/calculator", getCalculator);
app.post("/calculator", postCalculator);

app.listen(8080, (err) => {
  if (err) console.log("Greska", err);
  console.log("Server started at port 8080");
});

// const person = {
//     name: "",
//     surname: ""
// }

//  MVC
// 1. Model -> data
const cars = {
  brand: "",
  model: "",
  yearOfProduction: "",
};
// 2. View -> client interaction
//we fetch some data on frontend and
//ex. cars.map(<li>car.brand</li>)
// clicks one car and call cars/1 url (endpoint)
// 3. Controller -> middleware between view and model, gets the events from view, manipulates the model
// app.get("cars/:id", (req, res) => {
//   fs.writeFile();
// });
