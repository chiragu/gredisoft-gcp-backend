/*
adminModel.js
Author: Chirag U
Last Updated: 05/12/2023

Model for admin account
*/

const mongoose = require('mongoose');  // import mongoose
const Schema = mongoose.Schema;  // create Schema


// SCHEMA ---------------------------------------------------------------------
const adminSchema = new Schema({
    userID: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tasks : {
        type: String,
        required: false
    }
});

// ----------------------------------------------------------------------------

module.exports = mongoose.model('Admin',adminSchema);  // export model