import express from "express";
import controller from "../controller/index.js";
const router = express.Router();

router.post("/addNewStudent", controller.addStudent);

router.get("/getAll", controller.getAllStudents);

router.get("/:id", controller.getSingleStudent);

router.put('/:id', controller.updateStudent);


export default router;
