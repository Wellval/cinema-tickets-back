const express = require('express');
const mongoose = require('mongoose');
const usersRoutes = require('../routes/users');
const moviesRoutes = require('../routes/movies');
const cinemasRoutes = require('../routes/cinemas');
const bodyParser = require('body-parser');

var cors = require('cors')
const app = express();
const routes = require('../routes/index');

const PORT = process.env.PORT || 5500;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(usersRoutes).use(moviesRoutes).use(cinemasRoutes);

async function start() {
    try {
        await mongoose.connect('mongodb+srv://valentina:1q2w3e4r@cluster0.zfb61.mongodb.net/myFirstDatabase', {
            useNewUrlParser: true
        });
        app.listen(PORT, () => {
            console.log('Server started')
        })
        app.use('/', routes);
        app.get('/', function (req, res) {
            res.json({ok: true})
        })
    } catch(e) {
        console.log(e)
    }
}

start()
