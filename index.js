const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

app.get('/', (req, res) => {
    res.send({Hi: 'there'});
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleID,
            clientSecret: keys.googleSecret,
            callbackURL: '/auth/google/callback'

        }, accessToken => {
            console.log(accessToken);
        }
    )
)

app.get('/auth/google', passport.authenticate('google',{
        scope: ['profile', 'email']
    })
);



const PORT = 8080;
app.listen(PORT);