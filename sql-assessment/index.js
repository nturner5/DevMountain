var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
//Need to enter username and password for your database
var connString = "postgres://postgres:25thnight@localhost/assessbox";

var app = express();

app.use(bodyParser.json());
app.use(cors());

//The test doesn't like the Sync version of connecting,
//  Here is a skeleton of the Async, in the callback is also
//  a good place to call your database seeds.
var db = massive.connect({connectionString : connString},
  function(err, localdb){
    db = localdb;
    app.set('db', db);
    
    db.user_create_seed(function(err, res){
      console.log(err)
      console.log("User Table Init");
    });
    db.vehicle_create_seed(function(err, res){
      console.log(err)
      console.log("Vehicle Table Init")
    });
})

module.exports = app;

// ENDPOINTS HERE 
// 1. Create an endpoint at GET '/api/users' that will query the database and get all users.
app.get('/api/users', (req, res, next) => {
  db.get_all_users((err, users) => {
    if(err) {
      return res.status(500).send(err)
    }
    res.json(users)
  })
})
//2. Create an endpoint at GET '/api/vehicles' that will query the database and get all vehicles.
app.get('/api/vehicles', (req, res, next) => {
  db.get_all_vehicles((err, vehicles) => {
    if(err) {
      return res.status(500).send(err)
    }
    res.json(vehicles)
  })
})
//3. Create an endpoint at POST '/api/users' that will take a user from the body and add them to the database
app.post('/api/users', (req, res, next) => {
    db.add_user([req.body.firstname, req.body.lastname, req.body.email], (err, user) => {
        if (err) {
            return res.status(500).send(err);
            
        }
        res.sendStatus(200);
    })
});
//4.
app.post('/api/vehicles', (req, res, next) => {
    db.add_vehicle([req.body.make, req.body.model, parseInt(req.body.year), parseInt(req.body.ownerId)], (err, vehicles) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.sendStatus(200);
    })
});
//5.
app.get('/api/users/:userId/vehiclecount', (req, res, next) => {
    db.get_vehicles_by_id([req.params.userId], (err, vehicles) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.json(vehicles);
    });
})
//6.
app.get('/api/user/:userId/vehicle', (req, res, next) => {
    db.get_vehicles_by_id([req.params.userId], (err, vehicles) => {
        if (err) {
           return res.status(500).send(err);

        }
        res.json(vehicles);
    });
});
//7.
app.get('/api/vehicle', (req, res, next) => {
  if(req.query.UserEmail){
    db.get_vehicles_by_email([decodeURIComponent(req.query.UserEmail)], (err, vehicles) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.json(vehicles);
    });
  }else{
    db.get_vehicles_by_partial_name([req.query.userFirstStart], (err, vehicles) => {
      if (err) {
        console.log(err);
          return res.status(500).send(err);
      }
      console.log(vehicles);
      res.json(vehicles);
    })
  }
})
//9.
app.get('/api/newervehiclesbyyear', (req, res, next) => {
  db.get_new_vehicles(function(err, vehicles){
    console.log(err);
    if (err) {
         return res.status(500).send(err);
    }

    res.json(vehicles);
  })
})
//10. 
app.put('/api/vehicle/:vehicleId/user/:userId', (req, res, next) =>{
  db.change_ownership([req.params.userId, req.params.vehicleId], (err, ownership) => {
    if (err) {
        return res.status(500).send(err);

    }
    res.sendStatus(200);
  });
});
//11.
app.delete('/api/user/:userId/vehicle/:vehicleId', (req, res, next) => {
  db.delete_ownership([req.params.vehicleId], (err, deleteOwnership) => {
    console.log(err);
    if (err) {
        return res.status(500).send(err);
    }
    res.sendStatus(200);
  })
});

//12. 
app.delete('/api/vehicle/:vehicleId', (req, res, next) => {
  db.delete_vehicle([req.params.vehicleId], (err, deleteVehicle) => {
    console.log(err);
    if (err) {
        return res.status(500).send(err);
    }
    res.sendStatus(200);
  })
})

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})
