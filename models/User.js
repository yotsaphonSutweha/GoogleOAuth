// this directory contain all the different models that we create using Mongoos

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a shema for new collection
const userSchema = new Schema({
    googleId: String
});

// telling mongoose to create a new collection called user
mongoose.model('users', userSchema);