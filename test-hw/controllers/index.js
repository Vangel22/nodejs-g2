const fs = require("fs");

const getAnalysis = async (req, res) => {
  try {
    // let output = await parseTemplate("analiza-forma");
    // res.send(output);
    res.render("analiza-forma");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const postAnalysis = async (req, res) => {
  const { txt } = req.body; //string

  if (!txt) {
    return res.status(400).send("Bad request");
  }

  //Nie sme ucenici vo Semos. Ucime Nodejs vo 19:30 sekoj Vtornik. Cetvrtok ne ucevme.

  //   - вкупен број на карактери
  const charLength = txt.length; //charLength = 5
  const words = txt.split(" "); // ["Nie","sme", "ucenici", "vo", "Semos"]
  //   - вкупен број на зборови помали од 5 карактери
  const wordLessThanFive = words.filter((word) => word.length < 5).length;
  //   - вкупен број на зборови поголеми од 5 карактери
  const wordMoreThanFive = words.filter((word) => word.length > 5).length;
  //   - вкупен број на зборови еднакви на 5 карактери
  const wordWithFive = words.filter((word) => word.length === 5).length;
  //   - број на реченици
  const sentence = txt.split(".");
  console.log("sentence", sentence);
  //   - број на зборови
  //   - број на зборови кои почнуваат на една од следниве букви: а, о, у, и, е
  const wordsWithLetter = words.filter((word) => {
    if (
      word.startsWith("а") ||
      word.startsWith("о") ||
      word.startsWith("у") ||
      word.startsWith("и") ||
      word.startsWith("е")
    )
      return word;
  });

  const data = {
    numChars: charLength,
    lessThanFive: wordLessThanFive,
    moreThanFive: wordMoreThanFive,
    equalFive: wordWithFive,
    sentenceLen: sentence.length,
    wordLen: words.length,
    wordsAEIOU: wordsWithLetter,
  };

  //data.numChars
  //data["numChars"]

  try {
    // let output = await parseTemplate("analiza", { ...data });
    // console.log("output", output);
    res.render("analiza", { ...data });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }

  // parseTemplate("analiza-forma", { data: { brojSamoglasi: 10, test: 20 } })
};

const parseTemplate = async (template, data = null) => {
  //if we do not call parseTemplate with data, data will stay null
  console.log("path", `${__dirname}/../views/${template}.html`);
  return new Promise((success, fail) => {
    fs.readFile(
      `${__dirname}/../views/${template}.html`, //analiza-form.html ili analiza.html
      "utf-8",
      (err, content) => {
        if (err) return fail(err);
        if (data) {
          //false
          for (d in data) {
            content = content.replaceAll(`{{${d}}}`, data[d]);
          }
        }
        return success(content); //ja vrakja analiza-forma.html so GET
        //ja vrakja analiza.html so POST
      }
    );
  });
};

module.exports = {
  getAnalysis,
  postAnalysis,
};
