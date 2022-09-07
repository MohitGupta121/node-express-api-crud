import express from 'express';
import db from '../model/index.js';
import pool from '../config/index.js';
const router = express.Router();

// const getAllStudents = async (req, res) => {
//     pool.getConnection((err, connection) => {
//         if(err) throw err
//         console.log(`connected as id ${connection.threadId}`)

//         connection.query('SELECT * from student', (err, rows) => {
//             connection.release() // return the connection to pool

//             if(!err) {
//                 res.send(rows)
//             } else {
//                 console.log(err)
//             }

//         })
//     })
// }

const Student = db.student
Student.sync({ force: true })
const getAllStudents = async (req, res) => {
    let students = await Student.findAll();
    res.status(200).send(students);
}


export default {getAllStudents};