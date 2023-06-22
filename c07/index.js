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

//handle functions

const handler = (req, res) => {
  const url = req.url;
  console.log(url);

  //sobiranje/2/2
  // " " / sobiranje / 2 / 2

  //   const array = [1,2,3,4];
  //   [a,b,c,d] = array;
  const [_, op, num1, num2] = req.url.split("/");

  const numTest = "1";
  Number(numTest); //now numTest will be 1

  const stringTest = 1;
  stringTest.toString(); //"1"

  let result;
  switch (op) {
    case "sobiranje":
      result = Number(num1) + Number(num2);
      res.end(`${result}`);
      break;
    case "odzemanje":
      result = Number(num1) - Number(num2);
      res.end(`${result}`);
      break;
    case "mnozenje":
      result = Number(num1) * Number(num2);
      res.end(`${result}`);
      break;
    case "delenje":
      result = Number(num1) / Number(num2);
      res.end(`${result}`);
      break;
    default:
      res.end("OK");
  }
};

const newServer = http.createServer(handler);

newServer.listen(8080);

//Homework
//1. /home/vangel/hristov -> res.end("Vangel Hristov") -> first letter should be capital
//2. /home/books/a -> res.end("Atomic Habits") -> all books starting with "a"
//3. /home/books/1 -> res.end({ "title": "1984", id: 1, author: "George Orwell" })
//   -> find the book with the given id
