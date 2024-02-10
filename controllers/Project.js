const Project = require("../models/Project");
const { uploadCloudinary } = require("../utils/uploadCloudinary");

exports.createProject = async (req, res) => {
    try {
        const {  title, description, github, url } = req.body;

        const {thumbnail} = req.files.thumbnail;

        const uploadThumbnail = await uploadCloudinary(process.env.FOLDER_NAME, thumbnail.tempFilePath);

        // Create a new project document
        const project = new Project({
            thumbnail:uploadThumbnail.url,
            title: title,
            description: description,
            github: github,
            url: url
        });

        // Save the project document to the database
        await project.save();

        res.status(201).json({
            success: true,
            message: "Project created successfully",
            project: project
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to create project",
            error: error.message
        });
    }
};

exports.getProject = async (req, res) => {
    try {
        // Fetch all project documents from the database
        const projects = await Project.find();

        res.status(200).json({
            success: true,
            message: "Projects found",
            projects: projects
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch projects",
            error: error.message
        });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const { projectId } = req.params;

        // Find the project document by ID and delete it
        const deletedProject = await Project.findByIdAndDelete(projectId);

        if (!deletedProject) {
            return res.status(404).json({
                success: false,
                message: "Project not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Project deleted successfully",
            deletedProject: deletedProject
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to delete project",
            error: error.message
        });
    }
};
