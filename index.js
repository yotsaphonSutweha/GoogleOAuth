const express = require('express');
const authRoutes = require('./routes/authRoutes');
require('./services/passport')

const app = express();

app.get('/', (req, res) => {
    res.send({Hi: 'there'});
});


authRoutes(app);

const PORT = 8080;
app.listen(PORT);