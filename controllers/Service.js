const Service = require("../models/Service");

// Get all services
exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        return res.status(200).json({
            success: true,
            message: "Services retrieved successfully",
            data: services
        });
    } catch (error) {
        console.error("Error fetching services:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Create a new service
exports.createService = async (req, res) => {
    try {
        const { title, description, icon } = req.body;
        if(!title || !description)
        {
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                
            });
        }
        const newService = new Service({ title, description, icon });
        await newService.save();
        return res.status(201).json({
            success: true,
            message: "Service created successfully",
            data: newService
        });
    } catch (error) {
        console.error("Error creating service:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};


exports.updateService = async (req, res) => {
    try {
        const { title, description, icon } = req.body;
        const serviceId = req.params.serviceId;
        const updatedService = await Service.findByIdAndUpdate(
            serviceId,
            { title, description, icon },
            { new: true }
        );
        if (!updatedService) {
            return res.status(404).json({
                success: false,
                message: "Service not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Service updated successfully",
            data: updatedService
        });
    } catch (error) {
        console.error("Error updating service:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};


// Delete a service by ID
exports.deleteService = async (req, res) => {
    try {
        const serviceId = req.params.serviceId;
        const deletedService = await Service.findByIdAndDelete(serviceId);
        if (!deletedService) {
            return res.status(404).json({
                success: false,
                message: "Service not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Service deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting service:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};
