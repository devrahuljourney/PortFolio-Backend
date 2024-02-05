const express = require("express");
require("dotenv").config();





const app = express();
require("./config/database").connect();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});