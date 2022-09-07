import express from 'express';
import  controller from '../controller/index.js';
const router = express.Router();

// router.get('/', getAllStudents);
router.get('/', controller.getAllStudents)


export default router;