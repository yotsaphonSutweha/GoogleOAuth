const express = require('express');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User')
require('./services/passport');

// connecting to mongo database
mongoose.connect(keys.mongoURI);

const app = express();

app.get('/', (req, res) => {
    res.send({Hi: 'there'});
});


authRoutes(app);

const PORT = 8080;
app.listen(PORT);