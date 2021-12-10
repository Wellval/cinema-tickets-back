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
    },
    session: { type: Schema.Types.ObjectId, ref: 'Session' },
})

module.exports = model('Movie', schema)