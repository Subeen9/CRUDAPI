const express = require('express');
const app = express()
app.use(express.json())
const model = require('./models/product.model.js')
const port = 3000;
const mongoose = require('mongoose')

app.get('/', (req, res)=>{
    res.send("You are on my server. local host 3000")
})
app.get("/api/get",async(req,res)=>{
    try{
        const user = await model.find({});
        res.status(200).json(user)
    }
    catch(e){
        res.status(500).json(e.message)
    }
})
// Get by Id
app.get("/api/get/:id", async (req, res)=>{
    try{
        const {id } =  req.params;
        const user = await model.findById(id)
        res.status(200).json(user)
    }
    catch(e){
        res.status(500).json({message: e.message})
    }
})
app.post('/api/user', async(req,res)=>{
    try{
        const user = await model.create(req.body)
        res.status(200).json(user)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})
mongoose.connect("mongodb+srv://subin:YloVABV7fMsg7nby@cluster0.0yidtdz.mongodb.net/Node?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("database connected")
    app.listen(port, ()=>{console.log("Hello world")})
})
.catch(()=>{
    console.log("Connection failed")
})
