var friends = require('../data/friend');


module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    
    app.post('/api/friends', function (req, res) {
        var friendMatch = {
            name: " ",
            photo: " ",
            scoreDiff: 1000
        };
        console.log(req.body);

        var userData = req.body;
        var userScore = userData.scores;

        var totalDiff = 0;

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDiff = 0;

            for (var j = 0; j < friends[i].scores[j]; j++) {

                totalDiff += Math.abs(parseInt(userScore[j]) - parseInt(friends[i].scores[j]));

                if (totalDiff <= friendMatch.friendDiff) {

                    friendMatch.name = friends[i].name;
                    friendMatch.photo = friends[i].photo;
                    friendMatch.friendDiff = totalDiff;
                }
            }
        }

        friends.push(userData);
        res.json(friends[friendMatch]);
    });
};