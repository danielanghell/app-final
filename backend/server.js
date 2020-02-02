require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rstIndex = require('./routes/index.route');

var app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rstIndex);


//error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var varErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

//start srv
app.listen(process.env.PORT, () => console.log(`Server started at port: ${process.env.PORT} `));