/*
adminController.js
Author: Chirag U
Last Updated: 05/12/2023

Controllers for logging in admin
*/

// Import Admin Model
const Admin = require('../models/adminModel');

// import fetch api
const fetch = (...args) =>	import('node-fetch').then(({default: fetch}) => fetch(...args));

// Login Admin
const loginAdmin = async (req, res) => {
    res.json({mssg: "Login Admin"});

}

// Export Functions
module.exports = loginAdmin;