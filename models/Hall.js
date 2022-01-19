const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String
    },
    rows: {
        type: Object
    }
})

module.exports = model('Hall', schema)