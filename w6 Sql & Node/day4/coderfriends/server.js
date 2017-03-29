const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const Auth0Strategy = require('passport-github2')
const config = require('./config.js')
const getGithubApi = require('github')

const github = new getGithubApi()
const app = express()
 
app.use(bodyParser.json());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'Whatever'
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(express.static('./public'))

var requireAuth = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(403).end();
  }
  return next();
}

passport.use(new Auth0Strategy({
  clientID: config.auth0.clientID,
  clientSecret: config.auth0.clientSecret,
  callbackURL: '/auth/github/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
  return done(null, profile);
}));


app.get('/auth/gitub', passport.authenticate('auth0'))

app.get('/auth/github/callback', passport.authenticate('auth0', {successRedirect: '/#/home'}), function(req, res){
    done(null, user);
})

app.get('/api/github/following', function(req, res, next) {

    var user = req.user.username
    github.users.getFollowingForUser({
        username: user
    }, function(err, resp) {
        console.log(err)
        res.send(resp.data)
    })
})

app.listen(9001, function(){
    console.log('Listening on port 9001')
})