const express = require("express");
const router = express.Router();
const { login, isAdmin, logout } = require("../middleware/Auth");
const { getSkill, createSkill, deleteSkill } = require("../controllers/Skill");
const { Contact, getContact } = require("../controllers/Contact");
const { createCode, getCoding, deleteCoding } = require("../controllers/Coding");
const { createService, deleteService, getAllServices } = require("../controllers/Service");
const { createWork, deleteWork, getWork } = require("../controllers/Work");
const { createUser, getUser } = require("../controllers/User");
const { createProject, deleteProject, getProject } = require("../controllers/Project");

// Routes for admin authentication
router.post("/admin/login", login);
router.post("/admin/logout", logout);

// Routes for admin operations on skills
router.post("/admin/create-skill", isAdmin, createSkill);
router.delete("/admin/delete-skill/:id", isAdmin, deleteSkill);
router.get("/get-skill", getSkill);


// route for contact 
router.post("/contactus", Contact );
router.get("/getcontact", getContact)

// route for coding profile
router.post("/admin/create-coding-profile",isAdmin,createCode);
router.delete("/admin/delete-coding-profile/:id",isAdmin,deleteCoding);
router.get("/get-coding-profile",getCoding);

// route for service 

router.post('/admin/createservice',isAdmin, createService);
router.delete('/admin/deleteservice/:serviceId',isAdmin, deleteService);
router.get('/getservice', getAllServices);


//work
router.post('/admin/creatework', isAdmin, createWork );
router.delete('/admin/deletework/:deleteId', isAdmin, deleteWork );
router.get('/getwork', getWork );

// user

router.put('/admin/createuser', isAdmin, createUser );
router.get('/getuser', getUser );

// project

router.post('/admin/createproject', isAdmin, createProject )
router.delete('/admin/deleteprojec/deleteId', isAdmin, deleteProject )
router.get('/getproject', getProject )






module.exports = router;
