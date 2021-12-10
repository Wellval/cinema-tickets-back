const { Schema, model } = require('mongoose');

const schema = new Schema({
    movie: {
        type: Schema.Types.ObjectId, ref: 'Movie'
    },
    city: {
        type: Object
    },
    cinema: {
        type: Schema.Types.ObjectId, ref: 'Cinema'
    },
    hall: {
        type:  Schema.Types.ObjectId, ref: 'Hall'
    },
    timeslot: {
        type: Object
    },
    date: {
        type: Schema.Types.ObjectId, ref: 'Date'
    }
})

module.exports = model('Session', schema)