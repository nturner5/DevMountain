const app = require('./server');
const db = app.get('db');

module.exports = {
    getAllSmartphones: function (req, res, next) {
        db.get_smartphones(function (err, data) {
            if (err) return console.log(err)
            res.status(200).send(data)
        })
    },
    getAllAccessories: function (req, res, next) {
        db.get_accessories(function (err, data) {
            if (err) return console.log(err)
            res.status(200).send(data)
        })
    },
    getSmartphone: function (req, res, next) {
        res.send('okay from get smartphone')
    },
    addToCart: function (req, res, next) {
        res.send('okay from add to cart')
    },
    getCart: function (req, res, next) {
        res.send('okay from get get cart')
    },
    deleteFromCart: function (req, res, next) {
        res.send('okay from get delete from cart')
    },
    register: function (req, res, next) {
        db.check_email([req.body.email], function (err, result) {
            console.log(result);
            if (err) return next(err);
            else if (result[0]) res.send('email is already used');
            else if (!result[0]) {
                db.register_user([req.body.firstName, req.body.lastName, req.body.email, req.body.password], function (err, users) {
                    if (err) res.status(500).send(err);
                    else res.send(users[0]);
                })
            }
        })
    },
    login: function (req, res, next) {
        console.log('function ifres', req.body)
        db.get_user([req.body.email], function (err, user) {
            if (err) res.status(500).json(err);
            else {
                console.log(user[0])
                if (req.body.password == user[0].password) {
                    console.log('password matched')
                    res.send(user[0])
                } else {
                    console.log('did not match')
                    res.send("Username or Password is incorrect");
                }
            }

        })
    }
}