const mongoose = require("mongoose");

// define the mongodb connection url
const mongoURL = 'mongodb://localhost:27017/hotels'

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