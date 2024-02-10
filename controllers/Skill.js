const Skill = require("../models/Skill");

exports.createSkill = async (req, res) => {
    try {
        
        const { name, proficiency } = req.body;

        
        if (!name) {
            return res.status(501).json({
                success: false,
                message: "Name is required." 
            });
        }

        
        const newSkill = new Skill({
            name: name,
            proficiency: proficiency
        });

        
        await newSkill.save();

        
        return res.status(200).json({
            success: true,
            message: "Skill created successfully!"
        });
    } catch (error) {
        
        console.error(error);  
        return res.status(500).json({
            success: false,
            message: "Internal server error. Please try again later." 
        });
    }
};

exports.getSkill = async (req,res) => {
    try {
        const skill = await Skill.find({});

        if(!skill)
        {
            return res.status(400).json({

                success:false,
                message:"Couldn't get Skill"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Skill Fetch Succeessfully",
            data: skill
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error. Please try again later."  
        });
    }
}


exports.deleteSkill = async (req, res) => {
    try {
        // Extracting skill ID from the request parameters
        const skillId = req.params.id;

        // Checking if the skill ID is provided
        if (!skillId) {
            return res.status(400).json({
                success: false,
                message: "Skill ID is required for deletion."  // Updated the error message
            });
        }

        // Finding the skill by ID and removing it
        const deletedSkill = await Skill.findByIdAndDelete(skillId);

        // Checking if the skill was found and deleted
        if (!deletedSkill) {
            return res.status(404).json({
                success: false,
                message: "Skill not found. Unable to delete."  // Updated the error message
            });
        }

        // Responding with a success message
        return res.status(200).json({
            success: true,
            message: "Skill deleted successfully!"
        });
    } catch (error) {
        // Handling any errors that might occur during the process
        console.error(error);  // Logging the error for debugging purposes
        return res.status(500).json({
            success: false,
            message: "Internal server error. Please try again later."  // Generic error message
        });
    }
};