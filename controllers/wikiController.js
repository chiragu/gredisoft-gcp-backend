/*
wikiController.js
Author: Chirag U
Last Updated: 04/18/2023

Controllers for the Wikipedia Bot
*/

// import wikipedia
const wiki = require('wikipedia');

// Get a response for a query
const getWikiQuery = async (req, res) => {

    // grab the query
    let query = req.query.query;
    
    // query the wikipedia api
    (async () => {
        try {
            const page = await wiki.page(query);
            //console.log(page);
            //Response of type @Page object
            const summary = await page.summary();
            //console.log(summary);
            //Response of type @wikiSummary - contains the intro and the main image
            res.status(200).send(summary["extract"] + "<br> <a href=" + page["fullurl"] + " target=\"_blank\">See More...</a>");
        } catch (error) {
            //console.log(error);
            //=> Typeof wikiError
            // return the response
            res.status(200).send("Did you say \"" + query +"\"? Sorry, I do not understand that. I am an informational bot that returns a summary from wikipedia based on your query. For example, if you want to learn about cars, type \"car\".");
        }
    })();
}


// Export Functions
module.exports = getWikiQuery;