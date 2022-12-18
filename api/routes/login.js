const express = require('express');
const router=express.Router()

const signupSchema=require('../model/signupmodel')

router.get('/',(req,res)=>{
    res.status(200).json({"message":"This is get request to login"})
})

router.post('/',(req,res)=>{
    const email=req.body.email
    const password=req.body.password

    signupSchema.find({email:req.body.email})
        .then(result=>{
            if(result.length==0){
                res.status(400).json({"message":"Email or password is wrong"})
            }
            else{
                if(result[0].password==password){
                    res.status(201).json({"message":"Login Successfull",credential:result})
                }
                else{
                    res.status(400).json({"message":"Email or password is wrong"})
                }
            }
        })
        .catch(err=>res.status(500).json({"message":"Server encountered a error"}))
})
module.exports=router