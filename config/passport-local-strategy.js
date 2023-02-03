const passport = require('passport');
const User = require('../models/user');

const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use(new LocalStrategy(
    function (email, password, done) {
        User.findOne({ email: email }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });

    }
));

//serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

//deserializing the user from the key in the cookies 
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, done) {
        if (err) {
            console.log('error has been seen correct it and come back ');
            return done(err);
        }

        return done(null, user);
    });

});


module.exports =passport;
