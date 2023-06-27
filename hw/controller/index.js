const fs = require("fs");

const parseTemplate = async (template, data = null) => {
  //if we do not call parseTemplate with data, data will stay null
  console.log("path", `${__dirname}/../views/${template}.html`);
  return new Promise((success, fail) => {
    fs.readFile(
      `${__dirname}/../views/${template}.html`, //calculator_form.html
      "utf-8",
      (err, content) => {
        if (err) return fail(err);
        if (data) {
          for (d in data) {
            content = content.replaceAll(`{{${d}}}`, data[d]);
          }
        }
        return success(content);
      }
    );
  });
};

const getAnalysis = async (req, res) => {
  try {
    let output = await parseTemplate("analiza-form");
    res.send(output);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const postAnalysis = async (req, res) => {
  const { txt } = req.body;

  if (!txt) {
    return res.status(400).send("Bad Request");
  }

  //num of characters
  const numOfChars = txt.length;
  //txt.split("").join("");
  //.length(); //trim()
  // console.log("numOfChars", numOfChars);
  // const allWords = txt.split(" ");
  // const wordLessFive = allWords.filter((word) => word.length < 5);
  // console.log("words less than five", wordLessFive);

  try {
    let output = await parseTemplate("analiza", { data: txt }); //data: 4
    res.send(output);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAnalysis,
  postAnalysis,
};
