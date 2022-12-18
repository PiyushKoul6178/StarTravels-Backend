const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  CityName: mongoose.Schema.Types.String,
  ToCityName: mongoose.Schema.Types.String,
  CityCode: mongoose.Schema.Types.String,
  DateofTravel:mongoose.Schema.Types.String,
  ToCityCode: mongoose.Schema.Types.String,
  DepartTime: mongoose.Schema.Types.String,
  ArrivalTime: mongoose.Schema.Types.String,
  JourneyTime: mongoose.Schema.Types.String,
  Layover: mongoose.Schema.Types.String,
  // LayoverTime:mongoose.Schema.Types.String,
  // LayoverCode:mongoose.Schema.Types.String,
  // Airlines:mongoose.Schema.Types.String,
  PriceAdult: mongoose.Schema.Types.Number,
  PriceChildren: mongoose.Schema.Types.Number,
  PriceInfant: mongoose.Schema.Types.Number
});
module.exports = mongoose.model("searchSchema", schema);
