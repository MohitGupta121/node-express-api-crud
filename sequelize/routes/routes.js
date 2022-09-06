import express from 'express';
import  getAllStudents from '../controller/index.js';
const router = express.Router();

router.get('/', getAllStudents);
router.get('/getAll', getAllStudents);


export default router;