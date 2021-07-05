const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send("hello worldddd nodee")
})

app.listen(3000,()=>{
    console.log("start node server at port 3000")
})