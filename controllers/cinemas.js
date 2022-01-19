const Cinema = require('../models/Cinema')

const getCinemas = (req, res) => {
    Cinema.find().then((result) => {
        res.send(result)
    }).catch((e) => {
        console.log(e)
    })
}

const getCinema = (req, res) => {
    Cinema.findById(req.params.id).then((result) => {
        res.send(result)
    }).catch((e) => {
        console.log(e)
    })
}

const addCinema = (req, res) => {
    const cinema = new Cinema(req.body);
    cinema.save().then((result) => {
        res.json(result)
    }).catch((e) => {
        console.log(e)
    })
}


module.exports = { getCinemas, getCinema, addCinema }