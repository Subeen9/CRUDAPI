const express = require('express');
const app = express()
const port = 3000;
const mongoose = require('mongoose')

app.get('/', (req, res)=>{
    res.send("You are on my server. local host 3000")
})
mongoose.connect("mongodb+srv://subin:YloVABV7fMsg7nby@cluster0.0yidtdz.mongodb.net/Node?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("database connected")
    app.listen(port, ()=>{console.log("Hello world")})
})
.catch(()=>{
    console.log("Connection failed")
})
