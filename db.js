const mongoose = require("mongoose");
require('dotenv').config();

// define the mongodb connection url
const mongoURL = process.env.MONGODB_URL_LOCAL;
// const mongoURL =  process.env.MONGODB_URL;

// setup mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true, //these are the required parameters  for connecting to a MongoDB server using Mongoose
    useUnifiedTopology: true
})

// Get the default connection
// mongoose maintaine the defaukt  connection object representing the mongo DB connection
const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
    console.log('Conected to mongoDB server');
});

db.on('error', (err) => {
    console.log('Error in the mongoDB server');
});

db.on('disconnected', () => {
    console.log('Disconected to mongoDB server');
});

//export the database connection
module.exports =db;