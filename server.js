// set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var path = require("path"); //pathing - for universal app.get(*)

    // configuration =================


    app.use(express.static(__dirname + '/dist'));                 // set the static files location /public/img will be /img for users
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

    //routes
    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, '/dist', 'index.html'));
    });
    
    // listen (start app with node server.js) ======================================
    var port = process.env.PORT;
    if (port === '' || port === undefined){
        port = 8080;
    }
    app.listen(port);
    console.log("App listening on port " + port);
