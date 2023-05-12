/*
server.js
Author: Chirag U
Last Updated: 04/18/2023

Serverside Express App for GCP React Apps
*/

// IMPORTS --------------------------------------------------------------------
const express = require('express');  // express 
const mongoose = require("mongoose"); // mongoose db
require("dotenv").config();  // dotenv variables
const routes = require("./routes"); // routes

// crate express app
const app = express();

// CORS -----------------------------------------------------------------------
app.use(function (req, res, next) {
    let origin = req.headers.origin;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// ROUTES ---------------------------------------------------------------------

app.use("/api/", routes);

// SERVER ---------------------------------------------------------------------

// connect to db (use db connection string from dotenv)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests (use port # from dotenv)
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB and Listening on Port", process.env.PORT);
        });
    })
    .catch((error) => {
        console.log("Database/Server Connection Failed!");
    });


