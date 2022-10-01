import express from "express";
import controller from "../controller/index.js";
import verifyToken from "../util/tokenVerification.js";
const router = express.Router();


router.post("/login", controller.authStudent);

router.post("/addNewStudent", controller.addStudent);

router.get("/getAll", verifyToken, controller.getAllStudents);

router.get("/:id", controller.getSingleStudent);

router.put("/update/:id", controller.updateStudent);

router.delete("/delete/:id", controller.deleteStudent);

router.post("/addImage", controller.upload, controller.addImage);

router.get("/image/:id", controller.getImage);

export default router;
