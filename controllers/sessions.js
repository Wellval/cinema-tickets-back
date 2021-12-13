const Session = require('../models/Session');
const mongoose = require('mongoose');

const getSessions = (req, res) => {

    const mappingObj = {
        city: 'cities',
        cinema: 'cinemas',
        date: 'dates',
        timeslot: 'timeslots'
    };

    const obj = {};

    for (let key of Object.keys(mappingObj)) {
        let val = req.query[mappingObj[key]];
        if (val) {
            if (typeof val === 'string') {
                obj[key] = mongoose.Types.ObjectId(val)
            } else if (val.length > 0) {
                obj[key] = {
                    $in: val.map(id => mongoose.Types.ObjectId(id))
                }
            }
        }
    }

    Session.find(obj).then((result) => {
        res.send(result)
    }).catch((e) => {
        console.log(e)
    })
}

const getMovieSessions = (req, res) => {
    if (req.params.movieId.match(/^[0-9a-fA-F]{24}$/)) {
        Session.find({ 'movie': req.params.movieId }).then((result) => {
            res.send(result)
        }).catch((e) => {
            console.log(e)
        })
    }
}

const deleteSession = (req, res) => {
    Session.findById(req.params.id).deleteOne().then(() => {
        getSessions(req, res);
    }).catch((e) => {
        console.log(e)
    })
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

module.exports = { getSessions, getMovieSessions, createSession, deleteSession }