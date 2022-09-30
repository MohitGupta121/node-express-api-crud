import db from "../model/index.js";
import jwt from "jsonwebtoken"

// image Upload
import multer from "multer";
import * as path from "path";

const Student = db.students;
const Login = db.login;
const Image = db.image;


// Auth User JWT
const authStudent = (req, res) => {
  const computer_code = req.body.computer_code;
  const password = req.body.password;

  Login.findOne({
    where: {
      computer_code: computer_code,
    },
  })
    .then((data) => {
      if (data != null) {
        jwt.sign({data}, 'secretkey', (err, token) => {
          res.json({
            token
          });
        });
      } else {
        res.send({
          data: data,
          message: `incorrect credentials`,
        });
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: "Error to connect from table ",
      });
    });
};


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
    console.log(error);
  }
};

// 4. update Student

const updateStudent = async (req, res) => {
  try {
    let id = req.params.id;
    const student = await Student.update(req.body, { where: { id: id } });
    res.status(200).send(student);
  } catch (error) {
    console.log(error);
  }
};

// 5. delete student by id

const deleteStudent = async (req, res) => {
  try {
    let id = req.params.id;
    await Student.destroy({ where: { id: id } });
    res.status(200).send("Student is deleted !");
  } catch (error) {
    console.log(error);
  }
};

// 8. Upload Image

const addImage = async (req, res) => {
  const info = {
    image: req.file.path,
  };

  try {
    const image = await Image.create(info);
    res.status(200).send(image);
  } catch (error) {
    console.log(error);
  }
};
 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif|mp4/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");

const getImage = async (req, res) => {
  try {
    let id = req.params.id;
    let image = await Image.findOne({ where: { id: id } });
    // res.status(200).send(image);
    res.send(`<img src=http://localhost:8000/${image.image}>`);
  } catch (error) {
    console.log(error);
  }
};

export default {
  authStudent,
  addStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
  upload,
  addImage,
  getImage,
};
