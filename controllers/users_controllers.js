const { render } = require('ejs');
const User = require('../models/user')

module.exports.profile = function (req, res) {

    return res.render('users', {
        title: 'Users',
    });
};

// Render the sign up page 
module.exports.signUp = function (req, res) {
    return res.render('user_sign_up', {
        title: "STUCK! | Sign Up"
    })

}

//Render the sing in page 
module.exports.signIn = function (req, res) {
    return res.render('user_sign_in', {
        title: "STUCK! | Sign In"
    })

}

//get the signup data

module.exports.create = function (req, res) {
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }

    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { console.log('error in finding user in signing up'); return }

        if (!user) {
            User.create(req.body, function (err, user) {
                if (err) { console.log('error in creating user while signing up'); return }

                return res.redirect('/users/sign-in');
            })
        }

        else {
            return res.redirect('back');
        }
    })

}

//sign-in and create a session for the user 
module.exports.createSession = function (req, res) {
    //tood leter

}