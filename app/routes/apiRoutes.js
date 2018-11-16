// load data
const peopleData = require('../data/friends');

// routing
module.exports = app => {

    // create api GET routes to /api/friends to display JSON of all possible friends
    app.get('/api/friends', (req, res) => {
        res.json(peopleData);
    });

    // create api POST route to /api/friends to handle incoming survey results
    app.post('/api/friends', (req, res) => {
        const scores = [];
        for (i in req.body.scores) {
            scores.push(parseInt(req.body.scores[i].slice(0,1)));
        }

        let rawData = {
            name: req.body.name, 
            photo: req.body.photo,
            scores: scores
        };

        // match compatibility logic
        let match = [];
        let lowestDiff = 100;
        peopleData.forEach(person => {

            // find total difference between new score and people in database
            let totalDiff = 0;
            for (i in scores) {
                totalDiff += Math.abs(scores[i] - person.scores[i]);
            }
            
            // if difference of scores is equal to the current lowest difference, add person to the match array
            // there can be more than one person who matches
            if (lowestDiff === totalDiff) {
                match.push(person);
            } 
            
            // if a lower difference of scores is calculated, empty the array, then add the person as a match
            if (lowestDiff > totalDiff) {
                match = [];
                match.push(person);
                lowestDiff = totalDiff;
            }
        });

        // respond with match(es) to be displayed in modal
        console.log(match);
        res.json(match);

        // add new survey entry to dataset
        peopleData.push(rawData);
    });
}


