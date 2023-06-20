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

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" }); //HTTP/1.1 200 OK
  const q = url.parse(req.url, true).query; //after question mark everything is query string
  const txt = q.year + " " + q.month + " " + q.quarter;
  res.end(txt);
});

server.listen(8080);

// Task
// 1. Get your name, surname and year of birth
// 2. Display it on server
