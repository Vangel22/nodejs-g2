const {
  getAllStudents,
  addNewStudent,
  deleteStudent,
  editStudent,
} = require("./students");

//IIFE
(async () => {
  try {
    await addNewStudent({ name: "Pero", surname: "Perovski", age: "2002" });
  } catch (err) {
    console.log("Error", err);
  } finally {
    console.log("END CODE");
  }
})();
