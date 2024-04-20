const mongoose = require('mongoose');

// define menu schema
const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    taste:
    {
        type: String,
        enum: ['spicy', 'normal', 'mild', 'sweet'],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingregients: {
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0,
    }

});

// creating export
const menuItem = mongoose.model('menuItem', menuSchema);
module.exports = menuItem;