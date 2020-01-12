var express = require('express');

var path = require('path');
// Makes routing easy using Node js
var app = express();
// allows us to recieve information in JSON format
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8081;


app.use(bodyParser.urlencoded({ extended: true }))

// parse application data into json format
app.use(bodyParser.json())



// this line tells server to include these routes by using express
require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes.js')(app);



app.listen(PORT, function () {
    console.log("App listening on PORT: http://localhost:" + PORT);
});