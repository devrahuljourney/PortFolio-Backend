const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = async () => {
    try {
        console.log("Before Database connection");
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Db connected Successfully");
    } catch (error) {
        console.error('Error in db connection: ', error.message);
    }
}