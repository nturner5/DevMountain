module.exports = {
    created: function (req, res) {
    var listOfMovies = req.body;
    listOfMovies.forEach(function (movie) {
        movies.push(movie);
    })
    return req.statusCode(200).send(movies);
}, read: function (req, res) {
    var title = req.query.title;
    var genre = req.query.genre;

    if (genre && title) {
        moives.find(function (movie) {
            return movie.title === title && movie.genre === genre;
        })
        res.status(200).send(returnedMovie); // double search
    } else {
        res.status(200).send('must pass in search queries (genre or title)');

    }
}
}