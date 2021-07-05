const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send({a:1})
})

app.get('/hi',(req,res)=>{
    res.send("hi world node")
})

app.listen(3000,()=>{
    console.log("start node server at port 3000")
})