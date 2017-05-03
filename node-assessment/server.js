const express = require('express');
const bodyParser = require('body-parser');
const userCtrl = require('./userCtrl.js')

const app = module.exports = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/api/users', function (req, res) {
    if (req.query.id) {
        res.status(200).send(userCtrl.findUserById(req.query.id))
    }
    if (req.query.getall) {
        res.status(200).send(userCtrl.readAll())
    }
    if (req.query.age) {
        res.status(200).send(userCtrl.getUsersByAgeLimit(req.query.age))
    }

    if (req.query.lastname) {
        res.status(200).send(userCtrl.findUserByQuery('last_name', req.query.lastname))
    }
    if (req.query.email) {
        res.status(200).send(userCtrl.findUserByQuery('email', req.query.email))
    }

    if (req.query.fav) {
        res.status(200).send(userCtrl.getUsersByFavorite(req.query.fav))
    }
    if (req.query.deleteId) {
        res.status(200).send(userCtrl.removeUser(req.query.deleteId))
    }
})

app.get("/api/users", (req, res) => {
    res.status(200).send(userCtrl.readAll())
})

app.get("/api/users/:id", (req, res) => {
  var id = req.params.id;
  res.status(200).send(userCtrl.findUserById(id));
})

app.get('/api/admins', (req, res) => {
    res.status(200).send(userCtrl.getAdmins())
})
app.get('/api/nonadmins', (req, res) => {
    res.status(200).send(userCtrl.getNonAdmins())
})

app.put("/api/users/:id", (req, res) => {
  var id = req.params.id;
  res.status(200).send(userCtrl.updateUser(id, req.body))
})

app.post('/api/users', (req, res) => {
    res.status(200).send(userCtrl.createUser(req.body))
})

app.delete("/api/users/:id", (req, res) => {
  var id = req.params.id;
  res.status(200).send(userCtrl.removeUser(id));
})


// app.listen(3000, function(){
//     console.log('listening on port 3000')
// })