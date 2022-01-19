const Seat = require('../models/Seat');

const getSeats = (req, res) => {
    Seat.find().then((result) => {
        res.send(result);
    }).catch((e) => {
        console.log(e)
    })
}

module.exports = { getSeats }