const http = require("http"); //protocol for communication
const url = require("url");

// const server = http.createServer((req, res) => {
//   const url = req.url; //doesn't see localhost
//   const method = req.method; //GET, POST, PUT, PATCH, DELETE

//   if (url === "/") {
//     res.write("Home");
//     res.end();
//   }
//   if (url === "/student") {
//     res.write("Hello student!");
//     res.end();
//   }
// });

const obj = {
  month: "06",
  year: "2023",
};

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-type": "text/html" }); //HTTP/1.1 200 OK
//   const q = url.parse(req.url, true).query; //after question mark everything is query string
//   const txt = q.year + " " + q.month + " " + q.quarter;
//   res.end(txt);
// });

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end("<h1>Hello student</h1>");
});

server.listen(8080);

// Homework
// 1. Home - display data for cars, books, cities
// 2. Cars - route with query to display singleCar
// 3. Fetch and display users from
// https://jsonplaceholder.typicode.com/users
// 4. Optional - HTML
