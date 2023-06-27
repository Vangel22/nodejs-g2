const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let data = {
    ime: "Pero",
    prezime: "Perovski",
    niza: ["Skopje", "Bitola", "Strumica"],
    studenti: [
      { ime: "Petre", prezime: "Petrevski", prosek: 9.2 },
      { ime: "Ivan", prezime: "Ivanovski", prosek: 8.2 },
      { ime: "Ace", prezime: "Acevski", prosek: 9.9 },
      { ime: "Stanko", prezime: "Stankovski", prosek: 7.2 },
    ],
  };
  res.render("index", data);
});

app.listen(8080, (err) => {
  if (err) console.log(err);
  console.log("Server started");
});
