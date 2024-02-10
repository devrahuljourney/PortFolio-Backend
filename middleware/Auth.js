let Admin = false;
require("dotenv").config();

exports.isAdmin = async (req, res, next) => {
    if (Admin) {
        console.log("Admin Verified");
        next();
    } else {
        return res.status(400).json({
            success: false,
            message: "Unauthorized access. This is an Admin route."
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log("username", username);
        console.log("password", password)
        // console.log("username-process", process.env.user);
        // console.log("password-process", process.env.password)
        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "Enter all fields."
            });
        }

         if (username === process.env.user && password === process.env.password) {
            Admin = true;
            return res.status(200).json({
                success: true,
                message: "Login successfully."
            });
        } else {
            return res.status(400).json({
                success: false,
                message: "Wrong username/password.",
                error:error.message
            });
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Login failure.",
            error:error.message
        });
    }
};

exports.logout = async (req, res) => {
    try {
        Admin = false;
        if (Admin) {
            return res.status(400).json({
                success: false,
                message: "Logout failure."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Logout successfully."
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Logout failure."
        });
    }
};
