const express = require('express');

const  getAllStudents  = require('../controller/index.js');

const router = express.Router();

router.get('/', getAllStudents);
router.get('/getAll', getAllStudents);


module.exports=router;