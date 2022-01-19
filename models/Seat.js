const { Schema, model } = require('mongoose');

const schema = new Schema({
    category: {
        type: String
    },
    price: {
        type: Number
    }
})

module.exports = model('Seat', schema)