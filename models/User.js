const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    
    profileImage: {
        type:String,
        
    },
    about: {
        type:String,
        
    },
    resume: {
        type:String,
        
    }
    
})

module.exports = mongoose.model("Service",userSchema);