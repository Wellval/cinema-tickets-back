const Cinema = require('../models/Cinema')

const getCinemas = (req, res) => {
    Cinema.find().then((result) => {
        res.send(result)
    }).catch((e) => {
        console.log(e)
    })
}

module.exports = { getCinemas }