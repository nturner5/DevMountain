
// DRY - Don't Repeat Youself

// Node
// Backend
// Run servers 
// Anything that is data driven
// respsonds to events

// npm init (will give you a package.json)
// npm install --save 
// npm uninstall --save
// npm install -g (global for your system)

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// all express methods are available us in 'app'

//MIDDLEWARE
app.use(bodyParser.json());
app._router.use(bodyParser.urlencoded({ extended: true }));

// all backend is request and responses
// ENDPOINTS
// https://localhost:PORT
// https://127.0.0.1:PORT
// creating the addresses to hit
app.get('/hai', function(request, response, next){
    reponse.status(200).send('HAI');
});

// we decide what address we want for this request
app.post('/saveName', function(request, response, next){
    // request.body --> hold any data that you send from the client
    console.log('request.body', request.body)
    var res = 'Got name ' + request.body.name;
    response.status(200).send('res')
})

// LISTEN
app.listen(9000, function(){
    console.log('Listening on port 9000')
})