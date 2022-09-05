const app = require("./routes/routes.js")
const bodyParser = require('body-parser')
const pool = require("./config/index.js")



// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.json())

app.get('', (req, res) => {

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
})


