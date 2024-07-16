const mongoose = require("mongoose");

const Mathsone = new mongoose.Schema({
    title:String,
    id:String,
    pdfname:String,
    pdflink:String,
    examname:String,
    examlink:String
},{timestamps:true});

module.exports = mongoose.model("maths1", Mathsone)