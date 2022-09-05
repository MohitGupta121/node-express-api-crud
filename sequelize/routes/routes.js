const express =require("express")
const app=express()
const port=process.env.port || 5000

// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listen on port ${port}`))
