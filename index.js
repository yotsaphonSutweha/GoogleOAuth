const express = require('express');


require('./services/passport')
const app = express();

app.get('/', (req, res) => {
    res.send({Hi: 'there'});
});


require('./routes/authRoutes')(app);

const PORT = 8080;
app.listen(PORT);