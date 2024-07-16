const mongoose = require("mongoose");

const Emerg = new mongoose.Schema({
    title:String,
    id:String,
    pdfname:String,
    pdflink:String,
    examname:String,
    examlink:String
},{timestamps:true});

module.exports = mongoose.model("emerg", Emerg)