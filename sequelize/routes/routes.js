import express from "express";
import controller from "../controller/index.js";
const router = express.Router();

router.post("/addNewStudent", controller.addStudent);

router.get("/getAll", controller.getAllStudents);

export default router;
