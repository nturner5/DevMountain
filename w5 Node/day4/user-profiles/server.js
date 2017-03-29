var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var config = require('./config.js')
var cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:9092'
};
var userCtrl = require('./controllers/userCtrl.js')
var profileCtrl = require('./controllers/profileCtrl.js')
var port = 9092;


var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))
app.use(cors(corsOptions));
app.use(session({ 
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true

 }))
app.use(express.static(__dirname + '/public'));

app.post('/api/login', userCtrl.login)
app.get('/api/profiles', profileCtrl.friends)

app.listen(port, function(){
    console.log('Listening on port', port)
})