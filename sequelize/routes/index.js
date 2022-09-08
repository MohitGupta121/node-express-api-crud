import express from "express";
const app=express()
const studentRoutes=require("./routes")


app.use("/",studentRoutes)