const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const data = require('./data') // bring in functions from data

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public')) // Method to link html and make the files public

app.get('/endpoint1', function(req, res, next){
    
})

app.listen(3000, function(){
    console.log('listening on port ${this.address().port}');
})