const { Schema, model } = require('mongoose');

const schema = new Schema({
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String
    },
})

module.exports = model('User', schema)