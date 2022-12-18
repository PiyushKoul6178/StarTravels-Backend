const express = require('express');
const router=express.Router()
const mongoose = require('mongoose');
router.get('/',(req,res)=>{
    res.status(200).json({"message":"get request"})
})
const signupSchema=require('../model/signupmodel')
router.post('/',(req,res)=>{
    signupSchema.find({email:req.body.email})
        .then(result=>{
            if(result.length==0){
                const object=new signupSchema({
                    _id:mongoose.Types.ObjectId(),
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password
                })
                object.save()
                    .then(result=>res.status(201).json({"message":"Sign Up successfull","result":result}))
                    .catch(err=>res.status(500).json({"message":"A server error occurred",error:err}))
            }
            else{
                res.status(400).json({"message":"This email already exists"})
            }
        })
    
})
router.patch('/',(req,res)=>{
    const email=req.body.email
    const oldpassword=req.body.oldpassword
    const newpassword=req.body.newpassword

    signupSchema.find({email:req.body.email})
        .then(result=>{
            if(result.length==0){
                res.status(400).json({"message":"Email or Password is wrong"})
            }
            else{
                if(result[0].password==oldpassword){
                    const object={
                        _id:result[0]._id,
                        name:result[0].name,
                        email:result[0].email,
                        password:newpassword
                    } 
                    signupSchema.findByIdAndUpdate(result[0]._id,object)
                        .then(result=>res.status(200).json({"message":"Password updated successfully",status:true}))
                        .catch(err=>res.status(500).json({"message":"A error occurred",error:err}))
                }
                else{
                    res.status(400).json({"message":"Email or Password is wrong"})
                }
            }
        })
        .catch(err=>res.status(500).json({"message":"Server encountered a error"}))
})

module.exports=router