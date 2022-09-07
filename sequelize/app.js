import express from "express"
import router from './routes/routes.js'

const app=express()




// app.use('/getAll', allStudents);

// app.get('/', (req, res) => {
//     res.send('hello to the remote server');
//   });

// Routers
app.use('/', router);



const port=process.env.port || 8000
app.listen(port, () => console.log(`Listen on port ${port}`))

