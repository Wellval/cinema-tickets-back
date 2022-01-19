const Hall = require('../models/Hall');

const getHalls = (req, res) => {
    Hall.find().then((result) => {
        res.send(result)
    }).catch((e) => {
        console.log(e)
    })
}

const getHall = (req, res) => {
    console.log(req.params.id)
    Hall.findById(req.params.id).then((result) => {
        res.send(result)
    }).catch((e) => {
        console.log(e)
    })
}

const addHall = (req, res) => {
    const hall = new Hall(req.body);
    hall.save().then((result) => {
        res.json(result)
    }).catch((e) => {
        console.log(e)
    })
}

const editHall = (req, res) => {
    let newHall = {
        name: req.body.name,
        rows: req.body.rows
    }
    console.log(44)
    Hall.findByIdAndUpdate(req.params.id, newHall, function (err) {
        if (err) { res.send(err); }
        res.json(newHall);
    })
}

module.exports = { getHall, getHalls, addHall, editHall }