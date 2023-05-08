/*
jokesController.js
Author: Chirag U
Last Updated: 05/08/2023

Controllers for the Dad Jokes
*/

// import fetch api
const fetch = (...args) =>	import('node-fetch').then(({default: fetch}) => fetch(...args));

// Get a Dad Joke
const getJoke = async (req, res) => {
        
    const url ='https://icanhazdadjoke.com/';
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
        res.status(500).json({msg: `Error In Fetching Dad Joke Data!`});
    }
}

// Export Functions
module.exports = getJoke;