const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const massive = require('massive')
const config = require('./config')

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./'))

var conn = massive.connectSync({
  connectionString: "postgres://postgres:25thnight@localhost/htc"
});

app.set('db', conn);
var db = app.get('db');

app.listen(3000, function(){
    console.log("listening on 3000")
})

