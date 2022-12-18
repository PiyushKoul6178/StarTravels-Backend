const express=require('express')
const app=express()
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cors())
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const url=process.env.URL;
mongoose.connect(url)
    .then(console.log("Connected"))
    .catch(err=>console.log(err))
app.use("/",(req,res)=>{
    res.status(200).json({message:"Home route"})
})
const signup=require('./api/routes/signup')
app.use('/signup',signup);

const login=require('./api/routes/login')
app.use('/login',login);

const search=require('./api/routes/search')
app.use('/search',search);

app.use('/',(req,res)=>{
    res.status(500).json({"message":"Seems like you are lost"})
})
module.exports=app