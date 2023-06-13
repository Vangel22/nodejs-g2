const {
  getAllStudents,
  addNewStudent,
  deleteStudent,
  editStudent,
} = require("./students");

//IIFE
(async () => {
  try {
    // await addNewStudent({ name: "Pero", surname: "Perovski", age: "2002" });
    // let students = await getAllStudents();
    // console.log("allStudents", students);

    await editStudent(0, { surname: "Hristov" });

    // await deleteStudent(1);

    let studentsAfterUpdate = await getAllStudents();
    console.log("studentsAfterUpdate", studentsAfterUpdate);
  } catch (err) {
    console.log("Error", err);
  } finally {
    console.log("END CODE");
  }
})();
