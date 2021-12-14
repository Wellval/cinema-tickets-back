const User = require('../models/User');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
require('dotenv').config()

const registration = (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = md5(password)
    User.find().then((users) => {
        const user = new User({ email, password: hashedPassword });
        const registered = users.find(u => u.email === email);
        if (registered) {
            res.status(403).send('User with this email already exists')
        } else if (req.body.password.length < 5) {
            res.status(403).send('Password is too short')
        } else {
            user.save().then((result) => {
                res.json(result)
            }).catch(() => {
                res.status(403).send('Something went wrong' + user)
            })
        }
    })
}

const refreshToken = (req, res) => {
    jwt.sign({ id: req.user._id}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h"
    });
    return res.status(201).json({ accessToken })
}

const login = (req, res) => {
    const { email, password } = req.body;
    User.find().then((users) => {
        const user = users.find(u => u.email === email && u.password === md5(password));
        if (user) {
            const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "20s",
            });
            res.send({
                accessToken
            });
        } else {
            res.status(403).send('Username or password is incorrect');
        }
    })
}

const authenticateJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {

            if (err) {
                return res.sendStatus(403);
            }

            User.findById({ _id: user.id }).then((x) => {
                req.user = x;
                next();
            })
        });
    } else {
        res.sendStatus(401);
    }
};

const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        return res.sendStatus(403);
    }
}


module.exports = { registration, login, authenticateJWT, refreshToken, isAdmin }
