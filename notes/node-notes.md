const express = require('express');
const bodyParser = require('body-parser');
const userCtrl = require('./userCtrl')

const app = module.exports = express();

app.use(bodyParser.urlencoded({
    extended: false
}))
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
  console.log(userCtrl.updateUser(id, req.body))
  res.status(200).send(userCtrl.updateUser(id, req.body))
})

app.post('/api/users', (req, res) => {
    console.log(req.body)
    res.status(200).send(userCtrl.createUser(req.body))
})

app.delete("/api/users/:id", (req, res) => {
  var id = req.params.id;
  res.status(200).send(userCtrl.removeUser(id));
})



// app.listen(3001, function () {
//     console.log("Listening on port ", 3001)
// })


user Cont

const users = require('./users.js')

module.exports ={
  readAll: function() {
    return users.find();
  },
  findUserById: function(userId) {
    return users.findOne('id', userId)
  },
  getAdmins: function() {
    return users.find('type', 'admin')
  },
  getNonAdmins: function() {
    return users.find('type', 'user')
  },
  getUsersByFavorite: function(fav) {
     return users.find().filter(function(user) {
      return user.favorites.includes(fav);
    })
  },
  getUsersByAgeLimit: function(age) {
    return users.find('age', age)
  }, 
  findUserByQuery: function(query, value) {
    var result = ''
		if (query === 'last_name') {
			result = users.find('last_name', value)
		}

		if (query === 'email') {
			result = users.find('email', value)
		}
    if (query == "state") {
      return users.find("state", value)
    }
		return result
  },
  createUser: function(obj) {
    return users.add(obj)
  },
  updateUser(id, obj) {
      return users.update('id', id, obj)
  },
  removeUser: function(id) {
      return users.remove('id', id )
  }
}
