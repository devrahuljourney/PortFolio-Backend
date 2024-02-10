const mailSender = require("../mail/mailSender");
const AdminEmail = require("../mail/AdminEmail");
const UserConfirmationEmail = require("../mail/UserConfirmationEmail");
const Contact = require("../models/Contact");
exports.Contact = async (req,res) => {
    try {
        const {firstName, lastName, email, message, subject} = req.body;

        if(!firstName || !subject || !email || !message)
        {
            return res.status(400).json({
                success:false,
                message:"All field are required"
            })
        }
        const Admin = await mailSender('rahulkumarv269@gmail.com',
         `Portfolio - ${subject}`, AdminEmail(firstName,lastName,email,subject,message)  );
         console.log("Admin Email", Admin);

         const User = await mailSender(email, 'Your Email sent successfully', UserConfirmationEmail(firstName,lastName,email,subject,message) )

         console.log("User Email ", User);
         const contact = await Contact.create({
            firstName:firstName,
            lastName:lastName,
            email:email,
            subject:subject,
            message:message
         })


         return res.status(200).json({
            success:true,
            message:"Email Sent Successfully",
            data: contact
         })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Email sent failure",
            error:error.message
         })
    }
}

exports.getContact = async (req, res) => {
    try {
        const contact = await Contact.find({}); // Await the completion of the asynchronous operation
        console.log("contact", contact);
        if (!contact || contact.length === 0) { // Check if contact is null or empty array
            return res.status(400).json({
                success: false,
                message: "Failed to fetch Contact",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Contact details fetched successfully",
            data: contact
        });
    } catch (error) {
        console.error("Error fetching contact:", error); // Log the error for debugging purposes
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};
