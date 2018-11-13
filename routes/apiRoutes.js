// load data
const peopleData = require('../data/friends');

// routing
module.exports = function(app) {

    // create api GET routes to /api/friends to display JSON of all possible friends
    app.get('/api/friends', (req, res) => {
        res.json(peopleData);
    });

    // create api POST route to /api/friends to handle incoming survey results
    app.post('api/friends', (req, res) => {
        
    })
    // handles compatibility logic

}



