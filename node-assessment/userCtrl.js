const users = require('./users.js')

module.exports = {
    readAll: () => {
        return users.find();
    },
    findUserById: (userId) => {
        return users.findOne('id', userId)
    },
    getAdmins: () => {
        return users.find('type', 'admin')
    },
    getNonAdmins: () => {
        return users.find('type', 'user') 
    },
    getUsersByFavorite: (fav) => {
        return users.find().filter((user) => {
            return user.favorites.includes(fav)
        })
    },
    getUsersByAgeLimit: (age) => {
        return users.find('age', age)
    },
    findUserByQuery: (query, value) =>  {
        var result = ''
        if (query === 'last_name') {
            return users.find('last_name', value)
        }
        if (query === 'email') {
            return users.find('email', value)
        }
        if (query === 'state') {
            return users.find('state', value)
        }
        return result
    },
    createUser: (obj) => {
        return users.add(obj)
    },
    updateUser: (id, obj) => {
      return users.update('id', id, obj)
    },
    removeUser: function(id) {
        return users.remove('id', id )
    }
 }