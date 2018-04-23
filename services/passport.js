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
            // look through the record and search for the google.id inside the database
            // checking if the user is existed 
            User.findOne({ googleId: profile.id })
                .then((existingUser) => {
                    if(existingUser) {
                        // we already have a record with the given profile ID

                    }else{
                        // we don't have a record with this ID, make a new record 
                                    
                        // create a new model instance and save it to the database
                        // profile.id is the id coming from the user's profile
                        // .save is the method that persist the user's record into the database
                        new User({ googleId: profile.id }).save();
                    }
                })
            
          
        }
    )
)
