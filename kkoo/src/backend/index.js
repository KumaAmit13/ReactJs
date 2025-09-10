const express = require('express')
require("dotenv").config()
// import express from "express"
const app = express();
const port=3001;

app.get("/",(req,res)=>{
    res.send("hiii")
})



app.listen(port,()=>{
    console.log("hii is listining on port : ",{port})
})