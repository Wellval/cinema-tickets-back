const City = require('../models/City')

const getCities = (req, res) => {
    City.find().then((result) => {
        res.send(result)
    }).catch((e) => {
        console.log(e)
    })
}

const getCity = (req, res) => {
    City.findById(req.params.id).then((result) => {
        res.send(result)
    }).catch((e) => {
        console.log(e)
    })
}

module.exports = { getCity, getCities }