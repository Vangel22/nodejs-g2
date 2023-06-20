const {
  getAllStudents,
  addNewStudent,
  deleteStudent,
  editStudent,
  getSingleStudent,
} = require("./students");

//IIFE
(async () => {
  try {
    // await addNewStudent({ name: "Pero", surname: "Perovski", age: "2002" });
    // let students = await getAllStudents();
    // console.log("allStudents", students);

    // await editStudent(0, { surname: "Hristov" });

    // await deleteStudent(1);

    let student = await getSingleStudent(505);
    console.log("student", student);
  } catch (err) {
    console.log("Error", err);
  } finally {
    console.log("END CODE");
  }
})();
