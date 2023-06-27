const fs = require("fs");

const getAnalysis = async (req, res) => {
  try {
    let output = await parseTemplate("analiza-forma");
    res.send(output);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const postAnalysis = async (req, res) => {
  const { txt } = req.body;

  if (!txt) {
    return res.status(400).send("Bad request");
  }

  //   - вкупен број на карактери
  //   - вкупен број на зборови помали од 5 карактери
  //   - вкупен број на зборови поголеми од 5 карактери
  //   - вкупен број на зборови еднакви на 5 карактери
  //   - број на реченици
  //   - број на зборови
  //   - број на зборови кои почнуваат на една од следниве букви: а, о, у, и, е

  try {
    let output = await parseTemplate("analiza", { data: txt });
    res.send(output);
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
