const app = require('express')();
const passport = require('passport');
const bodyParser = require('body-parser')
const Auth0Strategy = require('passport-auth0').Strategy;
const session = require('express-session');
const config = require('./config');

app.use(bodyParser.json());

app.use(session({
    secret: 'whatever',
    saveuninitialized: true,
    resave: false,
}))


app.use(passport.initialize())
app.use(passport.session())

passport.use(new Auth0Strategy({
  domain: config.auth0.domain,
  clientID: config.auth0.clientID,
  clientSecret: config.auth0.clientSecret,
  callbackURL: '/auth/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
  return done(null, profile);
}));



app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {successRedirect: '/'}), function(req, res) {
    res.status(200).send(req.user);
})

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get('/auth/me', function(req, res) {
  if (!req.user) return res.sendStatus(404);
  res.status(200).json(req.user);
})

app.listen(9095, function() {
  console.log('Listening on port 9095')
})