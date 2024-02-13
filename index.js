const express = require("express");
const route = require("./routes/route");
const { cloudinaryConnect } = require("./config/cloudinary");
require("dotenv").config();
const fileUpload = require("express-fileupload");
const app = express();
const cors = require('cors');
app.use(cors({ origin: 'https://portfoliofronted.vercel.app', credentials: true }));
require("./config/database").connect();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// File upload middleware
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp",
    })
);

// Cloudinary connection
cloudinaryConnect();

// Routes
app.use("/api/v1", route);

// Starting the server and listening on the specified port
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});
