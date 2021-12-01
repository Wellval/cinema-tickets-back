const { Schema, model } = require('mongoose');

const schema = new Schema({
    id: {
        type: String,
    },
    title: {
        type: String
    },
    year: {
        type: String
    },
    rating: {
        type: Number
    },
    release_date: {
        type: String
    },
    plot: {
        type: String
    }
})

module.exports = model('Movie', schema)