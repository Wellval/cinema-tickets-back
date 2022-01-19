const { Schema, model } = require('mongoose');

const schema = new Schema({
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String || undefined,
        required: true
    },
    admin: {
        type: Boolean
    }
})

module.exports = model('User', schema)