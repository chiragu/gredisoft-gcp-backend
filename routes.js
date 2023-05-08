/*
routes.js
Author: Chirag U
Last Updated: 04/18/2023

Routes for the GCP React Apps
*/

const express = require('express');  // import express
const router = express.Router();  // create router

// CONTROLLERS ----------------------------------------------------------------

// wikibot controllers
const getWikiQuery = require("./controllers/wikiController");

// space info controllers 
const { getNASAapod, getNASAneo, getSpaceflightNews, getISSinfo, getAstronauts} = require("./controllers/spaceInfoController");

// Dad joke controllers
const getJoke = require("./controllers/jokesController");

// ROUTES ---------------------------------------------------------------------

// GET response to Wiki Query for Wikibot 
router.get("/wiki/", getWikiQuery);

// GET response to NASA Astronomy Picture of the Day
router.get("/space/apod/", getNASAapod);

// GET response to NASA Near Eath Objects
router.get("/space/neo/", getNASAneo);

// GET response to Spaceflight News
router.get("/space/news/", getSpaceflightNews);

// Get response to ISS information
router.get("/space/iss/", getISSinfo);

// Get response to Astronauts information
router.get("/space/astronauts/", getAstronauts);

// Get response for Dad Joke
router.get("/joke/", getJoke);

// ----------------------------------------------------------------------------

module.exports = router;  // export router