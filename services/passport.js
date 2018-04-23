const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleID,
            clientSecret: keys.googleSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {
            // create a new model instance and save it to the database
            // profile.id is the id coming from the user's profile
            // .save is the method that persist the user's record into the database
            new User({ googleId: profile.id }).save();
        }
    )
)
