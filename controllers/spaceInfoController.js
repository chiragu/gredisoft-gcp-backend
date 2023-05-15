/*
spaceInfoController.js
Author: Chirag U
Last Updated: 04/28/2023

Controllers for the SpaceInfo page
*/

// import fetch api
const fetch = (...args) =>	import('node-fetch').then(({default: fetch}) => fetch(...args));

// Get NASA astronomy picture of the day
const getNASAapod = async (req, res) => {
        
    const url ='https://api.nasa.gov/planetary/apod?api_key=' + process.env.NASA_API_KEY;
    const options = {
		method: 'GET',
		headers: {
			'accept': 'application/json'
		}
	};

    try {
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `Error In Fetching Space News Data!`});
    }
}

// Get NASA near earth objects information
const getNASAneo = async (req, res) => {
    
    let todaysDate = new Date();
    let todaysFormattedDate =  todaysDate.toISOString().split('T')[0];  
    const url ='https://api.nasa.gov/neo/rest/v1/feed?start_date=' + todaysFormattedDate + '&end_date=' + todaysFormattedDate + '&api_key=' + process.env.NASA_API_KEY;
    const options = {
		method: 'GET',
		headers: {
			'accept': 'application/json'
		}
	};

    try {
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `Error In Fetching Space News Data!`});
    }
}


// Get spaceflight news
const getSpaceflightNews = async (req, res) => {
     
    const url ='https://api.spaceflightnewsapi.net/v3/articles';
    const options = {
		method: 'GET',
		headers: {
			'accept': 'application/json'
		}
	};

    try {
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `Error In Fetching Space News Data!`});
    }
}

// Get ISS information
const getISSinfo = async (req, res) => {
        
    const url ='http://api.open-notify.org/iss-now.json';
    const options = {
		method: 'GET',
		headers: {
			'accept': 'application/json'
		}
	};

    try {
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `Error In Fetching Space News Data!`});
    }
}

// Get Astronauts information
const getAstronauts = async (req, res) => {
        
    const url ='http://api.open-notify.org/astros.json';
    const options = {
		method: 'GET',
		headers: {
			'accept': 'application/json'
		}
	};

    try {
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `Error In Fetching Space News Data!`});
    }
}


// Export Functions
module.exports = {
    getNASAapod,
    getNASAneo,
    getSpaceflightNews,
    getISSinfo,
    getAstronauts
};