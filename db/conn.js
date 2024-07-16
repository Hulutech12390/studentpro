/*
const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(() => console.log("connect database")).catch((err) => console.log("error"))

*/

const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: String,
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;