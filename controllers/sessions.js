const Session = require('../models/Session');
const mongoose = require('mongoose');


const getSessions = (req, res) => {
    Session.find().then((result) => {
        res.send(result)
    }).catch((e) => {
        console.log(e)
    })
}

const getMovieSessions = (req, res) => {
    if (req.params.movieId.match(/^[0-9a-fA-F]{24}$/)) {
        Session.find({'movie': req.params.movieId }).then((result) => {
            res.send(result)
        }).catch((e) => {
            console.log(e)
        })
    }
}

const createSession = async (req, res) => {
    const session = new Session({
        movie: mongoose.Types.ObjectId(req.body.movie),
        city: mongoose.Types.ObjectId(req.body.city),
        cinema: mongoose.Types.ObjectId(req.body.cinema),
        hall: mongoose.Types.ObjectId(req.body.hall),
        date: mongoose.Types.ObjectId(req.body.date),
        timeslot: mongoose.Types.ObjectId(req.body.timeslot),
    });
    await session.save().then((result) => {
        res.json(result)
    }).catch((e) => {
        console.log(e)
    })
}

module.exports = { getSessions, getMovieSessions, createSession }