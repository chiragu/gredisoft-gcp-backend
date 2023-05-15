/*
adminModel.js
Author: Chirag U
Last Updated: 05/12/2023

Model for admin account
*/

const mongoose = require('mongoose');  // import mongoose
const Schema = mongoose.Schema;  // create Schema
const bcrypt = require("bcrypt"); // bcrypt to hash passwords
const validator = require("validator"); // signup validation

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

// Static sign up method
adminSchema.statics.signup = async function (userID, password, signupCode) {

    // Validation
    if (!userID || !password || !signupCode) {
        throw Error("All fields must be filled");
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough");
    }

    // Wrong sign up code
    if (process.env.SIGNUP_CODE !== signupCode) {
        throw Error("Incorrect SignUp Code");
    }

    // Id already exists
    const exists = await this.findOne({userID});
    if (exists) {
        throw Error("ID already in use");
    }

    // Salt and hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // create admin user
    const AdminUser = await this.create({userID, password: hash});

    return AdminUser;
}

// Static login method
adminSchema.statics.login = async function (userID, password) {

    // Validation
    if (!userID || !password) {
        throw Error("All fields must be filled");
    }

    // Find user
    const AdminUser = await this.findOne({userID});
    if (!AdminUser) {
        throw Error("Incorrect ID");
    }

    // Check password
    const match = await bcrypt.compare(password, AdminUser.password);

    if (!match) {
        throw Error("Incorrect Password");
    }

    return AdminUser;
}

module.exports = mongoose.model('Admin',adminSchema);  // export model