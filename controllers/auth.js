const User = require('../models/User');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
require('dotenv').config()

const registration = (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = md5(password)
    let users;
    User.find().then((result) => {
        const user = new User({ email, password: hashedPassword });
        users = result;
        const registered = users.find(u => u.email === email);
        if (registered) {
            res.status(403).send('User with this email already exists')
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
    let users;
    User.find().then((result) => {
        users = result;
        const user = users.find(u => u.email === email && u.password === md5(password));
        console.log(user.role)
        const role = user.role;
        if (user) {
            const accessToken = jwt.sign({ username: user.username, role: user.role }, process.env.ACCESS_TOKEN_SECRET)
            res.send({
                accessToken,
                role
           });
        } else {
            res.status(403).send('Username or password is incorrect');
        }
    })
}

// const authenticateJWT = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (authHeader) {
//         const token = authHeader.split(' ')[1];

//         jwt.verify(token, accessTokenSecret, (err, user) => {
//             if (err) {
//                 return res.sendStatus(403);
//             }

//             req.user = user;
//             next();
//         });
//     } else {
//         res.sendStatus(401);
//     }
// };


module.exports = { registration, login }
