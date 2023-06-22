const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url; //req["url"]
  const method = req.method;

  // form - input - button
  // button calls the form with the action and the method specified

  if (url === "/") {
    //GET ROUTE
    //HOME PAGE
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(`<body><form action="/message" method="POST">
  	<input type="text" name="message"></input>
  	<button type="submit">Send</button></form></body></html>`);
    res.write("</html>");
    return res.end();
  }

  //   if (url === "/message" && method === "GET") {
  //     console.log("Sega e jasno");
  //   }

  if (url === "/message" && method === "POST") {
    //POST ROUTE
    const body = [];

    //request.on('eventName',callback)

    req.on("data", (chunk) => {
      // Storing the chunk data
      body.push(chunk); //this is is bytes
      console.log(body);
    });

    req.on("end", () => {
      //1. Viktor
      //2. Vangel
      //3. Test
      const parsedBody = Buffer.concat(body).toString();
      //message=Vangel
      const message = parsedBody.split("=")[1]; //data.txt
      //[0] = message, [1] = Vangel

      fs.writeFileSync("data.txt", parsedBody);

      // Printing the data
      console.log(message);
    });
  }
  res.statusCode = 302; //we will re-route you
  res.setHeader("Location", "/");
  return res.end();
});

// server.listen(8080);

// const name1 = "Vangel";
// const name2 = "Viktor";
// const name3 = "Test";

// const concatanatedNames = name1.concat(name2);
// console.log("concatanatedNames", concatanatedNames.concat(name3));

// sobiranje/2/2 => 4

const newServer = http.createServer((req, res) => {
  const url = req.url; //req["url"]
  const method = req.method;

  //get the data from the url
  //Hint -> split -> [1] sobiranje [2] broj1 [3] broj2

  //ako (sobiranje) togas vrati broj1 + broj2
  //ako (odzemanje) togas vrati broj1 - broj2
  //ako (mnozenje) togas vrati broj1 * broj2
  //ako (delenje) togas vrati broj1 / broj2
  //res.end(4);

  console.log(url);
});

newServer.listen(8080);
