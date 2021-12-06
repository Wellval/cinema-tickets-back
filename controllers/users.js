const User = require('../models/User');
const jwt = require('jsonwebtoken');

const getUsers = (req, res) => {
    User.find().then((result) => {
        res.send(result)
    }).catch((e) => {
        console.log(e)
    })
}

module.exports = { getUsers }