var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var app = express();
app.use(bodyParser.json());

var port = 3000;

var conn = massive.connectSync({
  connectionString: "postgres://postgres:25thnight@localhost/massive_demo"
});

app.set('db', conn); // adding postgres connection to express
var db = app.get('db');

app.get('/injuries', function (req, res) {
  db.getAllIncidents(function (err, incident) {
    // this has to be a callback so it doesn't run asynchronously
    res.send(incident); // injuries will contain an array of injuries
  })
});

app.get('/incidents', function (req, res) {
  console.log('POST sighting');
});

// POST method
app.post('/incidents', function (req, res) {
  var params = [
    req.body.us_state,
    req.body.injury_id,
    req.body.cause_id
  ]
  db.newIncident(params, function (err, res) {
    if (!err) {
      res.send('it works')
    }
  })
});

app.listen(port, function () {
  console.log("Started server on port", port);
});