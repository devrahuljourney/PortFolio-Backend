const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
    
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
        
    }
    
})

module.exports = mongoose.model("Service",serviceSchema);