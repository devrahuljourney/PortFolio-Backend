const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String
        
    },
    email: {
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    }
    ,
    message:{
        type:String,
        required:true
    }
    
})

module.exports = mongoose.model("Contact",contactSchema);
