const { Schema, model } = require('mongoose');

const schema = new Schema({
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
    },
    image_url: {
        type: String
    }
})

module.exports = model('Movie', schema)