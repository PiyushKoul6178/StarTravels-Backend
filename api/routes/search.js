const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const searchSchema = require("../model/searchmodel");

router.get("/", (req, res) => {
  res.status(200).json({ message: "This is get request to search" });
});
router.post("/",(req,res)=>{
    const object={
        CityName:req.body.CityName,
        ToCityName:req.body.ToCityName,
        DateofTravel:req.body.DateofTravel
    }
    searchSchema.find(object)
        .then(result=>{
            res.status(201).json({result:result})
        })
        .catch(err=>{
            res.status(500).json({error:err})
        })
})
// router.post("/", (req, res) => {
//   const object = new searchSchema({
//     _id: mongoose.Types.ObjectId(),
//     CityName: req.body.CityName,
//     ToCityName: req.body.ToCityName,
//     CityCode: req.body.CityCode,
//     DateofTravel: req.body.DateofTravel,
//     ToCityCode: req.body.ToCityCode,
//     DepartTime: req.body.DepartTime,
//     ArrivalTime: req.body.ArrivalTime,
//     JourneyTime: req.body.JourneyTime,
//     Layover: req.body.Layover,
//     LayoverTime:req.body.Layover,
//     LayoverCode:req.body.LayoverCode,
//     Airlines:req.body.Airlines,
//     PriceAdult: req.body.PriceAdult,
//     PriceChildren: req.body.PriceChildren,
//     PriceInfant: req.body.PriceInfant
//   });
//   object.save()
//     .then(result=>res.status(201).json({message:"Successfull"}))
//     .catch(err=>res.status(500).json({message:"Error",err:err}))
// });
module.exports = router;
