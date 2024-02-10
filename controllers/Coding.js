const Coding = require("../models/Coding");

exports.createCode = async (req,res) => {
    try {
        const {title,description,icon,link} = req.body;

        if(!title || !description || !link)
        {
            return res.status(400).json({
                success:false,
                message:"All field are required"
            })
        }

        const coding = await Coding.create({
            title:title,
            description:description,
            link:link,
            icon:icon
        })

        if(!coding)
        {
            return res.status(400).json({
                success:false,
                message:"Interval Error"
            })
        }
        return res.status(400).json({
            success:true,
            message:"Coding Profile created Successfully",
            data:coding
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Couldnt created coding profile",
            error: error.message
        })
    }
}

exports.deleteCoding = async (req, res) => {
    try {
        const codingId = req.params.id; // Access the codingId from req.params
        const codeProfile = await Coding.findByIdAndDelete(codingId); // Use findByIdAndDelete to delete by _id
        if (!codeProfile) {
            return res.status(404).json({
                success: false,
                message: "Coding profile not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Coding profile deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting coding profile:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};


exports.getCoding = async (req, res) => {
    try {
        

        // Use Mongoose's findById method to find the coding profile by its ID
        const codingProfile = await Coding.find({});

        // Check if the coding profile exists
        if (!codingProfile) {
            return res.status(404).json({
                success: false,
                message: "Coding profile not found"
            });
        }

        // If the coding profile exists, send it as a response
        return res.status(200).json({
            success: true,
            message: "Coding profile retrieved successfully",
            data: codingProfile
        });
    } catch (error) {
        // If an error occurs during the process, handle it
        console.error("Error fetching coding profile:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};
