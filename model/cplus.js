const mongoose = require("mongoose");

const Cplus = new mongoose.Schema({
    title:String,
    id:String,
    pdfname:String,
    pdflink:String,
    examname:String,
    examlink:String
},{timestamps:true});

module.exports = mongoose.model("cplus", Cplus)