const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const massive = require('massive')

const app = module.exports = express();
app.use(bodyParser.json());

var port = 9093

var conn = massive.connectSync({
  connectionString: "postgres://postgres:25thnight@localhost/sandbox"
});

app.set('db', conn);
var db = app.get('db');
var controller = require('./productCtrl.js');
app.get('/api/products', controller.GetAll);
app.get('/api/product/:productId', controller.GetOne);
app.put('/api/product/:productId', controller.Update);
app.post('/api/product', controller.Create);
app.delete('/api/product/:productId', controller.Delete);

app.listen(port, function() {
  console.log("Started server on port", port);
});

