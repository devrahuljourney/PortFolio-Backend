const mongoose = require("mongoose");

const codingSchema = mongoose.Schema({
    
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    icon: {
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }
    
})

module.exports = mongoose.model("Coding",codingSchema);