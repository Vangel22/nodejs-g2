const { read, write } = require("./io");

const getAllStudents = async () => {
  return read();
};

//create method
const addNewStudent = async (newStudentData) => {
  let students = await read(); //students is an Array
  students.push(newStudentData);
  await write(students);
};

//delete student
const deleteStudent = async (studentIndex) => {
  let students = await read();
  //pop - for students
  students = students.filter((student, index) => index !== studentIndex);
  await write(students);
};
