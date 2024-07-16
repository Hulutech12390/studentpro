const mongoose = require("mongoose")

exports.cat = mongoose.model('voids', {
    name:String
})