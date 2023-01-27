const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/stuck_development');


const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to mongodb"));

db.once('open', function () {
    console.log('connect to database :: MongoDB');

})


module.exports = db;