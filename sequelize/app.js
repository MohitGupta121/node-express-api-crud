import express from "express"
import allStudents from './routes/routes.js'

const app=express()


const port=process.env.port || 900

app.use('/getAll', allStudents);

app.get('/', (req, res) => {
    res.send('hello to the remote server');
  });



app.listen(port, () => console.log(`Listen on port ${port}`))

