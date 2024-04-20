const mongoose = require('mongoose');

//define the person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true//by thia the kind of validation that have to fill this
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true//it chech that  there is no one with same email in database 
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    }

});


//create person model
const Person = mongoose.model("Person", personSchema);
module.exports = Person;