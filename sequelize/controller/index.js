const express = require('express');
const pool =  require('../config/index.js');
const router = express.Router();

const getAllStudents = async (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from student', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
}

module.exports = getAllStudents;