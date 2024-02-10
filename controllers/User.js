const User = require("../models/User");
const { uploadCloudinary } = require("../utils/uploadCloudinary");

exports.createUser = async (req, res) => {
    try {
        const { profileImage, aboutImage } = req.files;
        const { about, resume } = req.body;

        // Fetch existing user document from the database
        let user = await User.findOne(); // Adjust this query as per your actual application logic

        // Create a new user document if none exists
        if (!user) {
            user = new User();
        }

        // Update profile image if provided
        if (profileImage) {
            const profileImageUpload = await uploadCloudinary(process.env.FOLDER_NAME, profileImage.tempFilePath);
            console.log("profile image ", profileImage);
            user.profileImage = profileImageUpload.url;
        }

        // Update about image if provided
        if (aboutImage) {
            const aboutImageUpload = await uploadCloudinary(process.env.FOLDER_NAME, aboutImage.tempFilePath);
            console.log("about image ", aboutImage);
            user.aboutImage = aboutImageUpload.url;
        }

        // Update resume if provided
        if (resume) {
            // Logic to handle resume update
            user.resume = resume;
        }

        // Update about if provided
        if (about) {
            // Logic to handle about update
            user.about = about;
        }

        // Save the updated user document
        await user.save();

        res.status(200).json({
            success: true,
            message: "User files updated successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to update user files",
            error: error.message
        });
    }
};


exports.getUser = async (req, res) => {
    try {
        // Fetch the user document from the database
        const user = await User.findOne(); // Adjust this query as per your actual application logic

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Return the user document in the response
        res.status(200).json({
            success: true,
            message: "User found",
            user: user
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch user",
            error: error.message
        });
    }
};