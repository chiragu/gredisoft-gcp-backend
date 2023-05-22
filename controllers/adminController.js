/*
adminController.js
Author: Chirag U
Last Updated: 05/12/2023

Controllers for logging in admin
*/

// Imports 
const Admin = require('../models/adminModel');  // Admin Model
const jwt = require("jsonwebtoken");  // JWT

// Create JWT
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: '3d'});
}

// Signup Admin
const signupAdmin = async (req, res) => {

    const {userID, password, signupCode} = req.body; 

    try {
        // create user
        const adminUser = await Admin.signup(userID, password, signupCode);
        // create token
        const token = createToken(adminUser._id);
        // Send response with id and token
        res.status(200).json({userID, token});
    }
    catch (error) {
        res.status(400).json({error: error.message});

    }
}

// Login Admin
const loginAdmin = async (req, res) => {

    const {userID, password} = req.body; 

    try {
        // login user
        const adminUser = await Admin.login(userID, password);
        // create token
        const token = createToken(adminUser._id);
        // Send response with id and token
        res.status(200).json({userID, token});
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

// Get Admin Tasks
const getAdminTasks = async (req, res) => {
    try {
        const _id = req.user._id;
        const AdminUserTasks = await Admin.findOne({_id}).select("tasks");
        res.status(200).json({tasks: AdminUserTasks.tasks});
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

// Set Admin Tasks
const setAdminTasks = async (req, res) => {
    try {
        const {tasks} = req.body;
        const _id = req.user._id; 
        await Admin.findOneAndUpdate({_id},{tasks});
        res.status(200).json({msg: "Updated tasks"});
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}


// Export Functions
module.exports = {signupAdmin, loginAdmin, getAdminTasks, setAdminTasks};