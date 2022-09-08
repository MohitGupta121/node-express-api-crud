import db from "../model/index.js";

const Student = db.students;

// 1. create product

const addStudent = async (req, res) => {
  const info = {
    name: req.body.name,
    lastname: req.body.lastname,
    enroll: req.body.enroll,
    mobile: req.body.mobile,
  };

  try {
    const student = await Student.create(info);
    res.status(200).send(student);
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req, res) => {
  let students = await Student.findAll();
  res.status(200).send(students);
};

export default { addStudent, getAllStudents };
