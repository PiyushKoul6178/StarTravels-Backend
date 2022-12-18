const mongoose = require('mongoose');

const schema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:mongoose.Schema.Types.String,
    email:mongoose.Schema.Types.String,
    password:mongoose.Schema.Types.String
})
module.exports=mongoose.model("signupSchema",schema)