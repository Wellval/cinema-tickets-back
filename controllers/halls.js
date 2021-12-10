const Hall = require('../models/Hall');

const getHalls = (req, res) => {
    Hall.find().then((result) => {
        res.send(result)
    }).catch((e) => {
        console.log(e)
    })
}

const getHall = (req, res) => {
    Hall.findById(req.params.id).then((result) => {
        res.send(result)
    }).catch((e) => {
        console.log(e)
    })
}

module.exports = { getHall, getHalls }