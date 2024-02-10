const Work = require("../models/work"); 
const { uploadCloudinary } = require("../utils/uploadCloudinary");

exports.createWork = async (req, res) => {
    try {
        const { companyName, role, start, end } = req.body;

        if (!req.files || !req.files.logo) {
            throw new Error('No logo file uploaded');
        }

        if (!companyName || !role || !start || !end) {
            return res.status(400).json({ 
                success: false,
                message: "All fields are required"
            });
        }

        const logo = req.files.logo;
        const logoUpload = await uploadCloudinary(process.env.FOLDER_NAME, logo.tempFilePath);

        if (!logoUpload) {
            return res.status(400).json({
                success: false,
                message: "Logo not uploaded"
            });
        }

        const newWork = new Work({ // Changed variable name to newWork and use new Work() for model instance creation
            companyName,
            role,
            start,
            end,
            logo: logoUpload.url
        });

        await newWork.save();

        return res.status(200).json({
            success: true,
            message: "Work Created Successfully",
            data: newWork
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to create Work",
            error: error.message,
        });
    }
};


exports.getWork = async(req,res) => {
    try {
        const work = await Work.find();
        if(!work)
        {
            return res.status(500).json({
                success:false,
                message:"Work not found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Work fetch successfully",
            data:work
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Work fetch failure",
            error:error.message
        })
    }
}

exports.deleteWork = async(req,res) => {
    try {
        const deleteId = req.params.deleteId;
        const work = await Work.findByIdAndDelete(deleteId);
        if(!work)
        {
            return res.status(500).json({
                success:false,
                message:"Couldnt get work"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Work Deleted successfully"
        })
    } catch (error) {
        return res.status(400).json({
            success:true,
            message:"Work deletion fail",
            error:error.message
        })
    }
}