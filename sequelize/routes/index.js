const express = require("express");
const app=express()
const studentRoutes=require("./routes")


app.use("/",studentRoutes)