const mongoose = require('mongoose');
const bcrypt=require("bcrypt");
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
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

personSchema.pre('save',async function (next)
{
    const person=this;
    // hash password only if it has been modified (or this is a new user)
    if(!person.isModified('password'))return next();
    try
    {
        //hash password generate
        const salt =await bcrypt.genSalt(10);
        // hash password
        const hashPassword= await bcrypt.hash(person.password ,salt) ;
        
        // override the plain password with the hashes one
        person.password=hashPassword;
        next();
    }catch(err)
    {
        return nexe(err);
    }
})

personSchema.method.comparePassword=async function (candidatePassword){
    try{
        // use bcrypt to compare the provided password with the hashed password 
        const isMatch=await bcrypt.compare(candidatePassword,this.password);
        return isMatch; 
    }catch(err)
    {
        throw(err);

    }
}

//create person model
const Person = mongoose.model("Person", personSchema);
module.exports = Person;