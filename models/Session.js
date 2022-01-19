const { Schema, model } = require('mongoose');

const schema = new Schema({
    movie: {
        type: Schema.Types.ObjectId, ref: 'Movie'
    },
    city: {
        type: Schema.Types.ObjectId, ref: 'City'
    },
    cinema: {
        type: Schema.Types.ObjectId, ref: 'Cinema'
    },
    hall: {
        type: Schema.Types.ObjectId, ref: 'Hall'
    },
    hallRows: [[
            {
                userId: {
                    type: String
                },
                status: {
                    type: String
                },
                seat: {
                    category: {
                        type: String
                    },
                    price: {
                        type: Number
                    },
                    _id: {
                        type: Schema.Types.ObjectId, ref: 'Seat'
                    }
                }
            }
        ]]
    ,
    timeslot: {
        type: Object
    },
    date: {
        type: Schema.Types.ObjectId, ref: 'Date'
    }
})

module.exports = model('Session', schema)