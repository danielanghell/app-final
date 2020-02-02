const mongoose = require('mongoose');

mongoose.connect(process.env.MongoDB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded'); }
    else { console.log('MongoDB connection failed ' + JSON.stringify(err, undefined, 2)); }
});

require('./user.model');