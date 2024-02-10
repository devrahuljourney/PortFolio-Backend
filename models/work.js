const mongoose = require("mongoose");

const workSchema = mongoose.Schema({
    logo: {
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    start:{
        type:String,
        required:true
    },
    end:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Work",workSchema);