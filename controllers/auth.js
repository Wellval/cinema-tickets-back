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

const login = (req, res) => {
    const { email, password } = req.body;
    User.find().then((users) => {
        const user = users.find(u => u.email === email && u.password === md5(password));
        if (user) {
            const accessToken = jwt.sign({ username: user.email, role: user.role }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "2h",
            })
            user.token = accessToken;
            const role = user.role;
            res.send({
                accessToken,
                role
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

            if (err || user.role !== 'admin') {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};


module.exports = { registration, login, authenticateJWT }
