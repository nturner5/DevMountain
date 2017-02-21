var express = require('express');
var bodyParser = require('body-parser');
var movies = require('./movies.js');
console.log(movies)

// app specific variables
var app = express();
var port = 9090;

// MIDDLEWARE -  app.use()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




// ENDPOINTS - Simple Netflix MOVIES
// LIST MOVIES
// GET MOVIES
// POST/ADD MOVIES
// DELETE MOVIES
// UPDATE MOVIES

app.get('/movies', function(request, response, next){
    console.log('Getting movies');
    res.status(200).send(movies);
})

app.post()




app.listen(port, function(){
    console.log('Listening on port', port)
});