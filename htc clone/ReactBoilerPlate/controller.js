const app = require('./server');
const db = app.get('db');

module.exports = {
    getAllSmartphones: function(req, res, next) {
        db.get_smartphones(function(err, data){
            if (err) return console.log(err)
            res.status(200).send(data)
        })
    },
    getAllAccessories: function(req, res, next) {
        db.get_accessories(function(err, data){
            if (err) return console.log(err)
            res.status(200).send(data)
        })
    },
    getSmartphone: function(req, res, next) {
        res.send('okay from get smartphone')
    },
    addToCart: function(req, res, next) {
        res.send('okay from add to cart')
    },
    getCart: function(req, res, next) {
        res.send('okay from get get cart')
    },
    deleteFromCart: function(req, res, next) {
        res.send('okay from get delete from cart')
    },
    register: function(req, res, next) {
        res.send('okay from register')
    },
    login: function(req, res, next) {
        res.send('okay from login')
    }
}