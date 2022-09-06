const express =require("express")
const app=express()
const allStudents =  require('./routes/routes.js');

const port=process.env.port || 7000

app.use('/getAll', allStudents);

app.get('/', (req, res) => {
    res.send('hello to the remote server');
  });



app.listen(port, () => console.log(`Listen on port ${port}`))

