import db from "../model/index.js";

const Student = db.students;

// 1. create student

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

// 2. get All Students

const getAllStudents = async (req, res) => {
  let students = await Student.findAll();
  res.status(200).send(students);
};

// 3. get single student

const getSingleStudent = async (req, res) => {
  try {
    let id = req.params.id;
    let student = await Student.findOne({ where: { id: id } });
    res.status(200).send(student);
  } catch (error) {
    console.log(error)
  }
};

export default { addStudent, getAllStudents, getSingleStudent };
