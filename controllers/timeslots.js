const Timeslot = require('../models/Timeslot')

const getTimeslots = (req, res) => {
    Timeslot.find().then((result) => {
        res.send(result)
    }).catch((e) => {
        console.log(e)
    })
}

const getTimeslot = (req, res) => {
    Timeslot.findById(req.params.id).then((result) => {
        res.send(result)
    }).catch((e) => {
        console.log(e)
    })
}

const addTimeslot = (req, res) => {
    const timeslot = new Timeslot(req.body);
    timeslot.save().then((result) => {
        res.json(result)
    }).catch((e) => {
        console.log(e)
    })
}

module.exports = { getTimeslot, getTimeslots, addTimeslot }