// external dependencies
var express = require('express');
var bodyParser = require('body-parser');
var movies = require('./movies');
var movies_controller = require('./controllers/movies_controller')

// app specific variables
var app = express();
var port = 9090;

// MIDDLEWARE - app.use()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// PASSING IN DATA
// pass in data with a get

// Path Params --> req.params // anything that is in the URLpath // this is going to be a variable and later I am going to replace it with a value
// URL Queries --> req.query

// get the movie --> req.params
app.get('/movies/:genre/:title', function (req, res, next) {
    var movieTitle = req.params.name;
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].title === movieTitle) {
            return res.status(200).send(movies[i]);
        }
    }
});
// post movie --> req.body
app.post('/movies', movies_controller.created )
// search/get movies --> req.query
app.get('./movies', movies_controller.read)
// delete
app.delete('/movies:name', function (req, res) {
    var movieToDelete = req.params.title;
    // var newMovies = movies.map(function(movie){
    //     if (movie.title !== movieToDelete) {
    //         return movie;
    //     }
    // })
    for (vari = 0; i < movies.length; i++) {
        if (movies[i].title === movieToDelete) {
            movies.splice(i, 1);
        }
    }

    res.status(200).send(newMovies);
});



app.listen(port, function () {
    console.log('Listening on port', port);
});