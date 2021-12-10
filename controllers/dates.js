const Date = require('../models/Date')

const getDates = (req, res) => {
    Date.find().then((result) => {
        res.send(result)
    }).catch((e) => {
        console.log(e)
    })
}

const getDate = (req, res) => {
    Date.findById(req.params.id).then((result) => {
        res.send(result)
    }).catch((e) => {
        console.log(e)
    })
}

module.exports = { getDate, getDates }