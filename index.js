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
        }, 
        (accessToken, refreshToken, profile, done) => {
            console.log('access token', accessToken);
            console.log('refresh token', refreshToken);
            console.log('profile', profile);
        }
    )
)

app.get('/auth/google', passport.authenticate('google',{
        scope: ['profile', 'email']
    })
);

app.get('/auth/google/callback', passport.authenticate('google'));


const PORT = 8080;
app.listen(PORT);