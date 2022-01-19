const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const Session = require('./models/Session');
const http = require('http').createServer(app);
const socket = require("socket.io");
const io = socket(http, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"]
    }
});
const routes = require('./routes/index');



const PORT = process.env.PORT || 5500;

const connections = [];

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: true,
        limit: 5000
    }));

io.on('connect', function (socket) {
    socket.on('subscribe', (session) => {
        console.log('connected', session._id)
        socket.join(session);
        connections.push({ socket: socket, sessionId: session._id });
    });

    socket.on('reserve', (obj) => {
        Session.findById(obj.session._id.toString(), function (err, doc) {
            doc.hallRows = obj.session.hallRows;
            doc.save(function (err) {
                if (err) { console.log(err); }
            })
            let sessionConnections = connections.filter(connection => connection.sessionId.toString() === obj.session._id.toString())
            for (let connection of sessionConnections) {
                connection.socket.emit('reserved', JSON.stringify(doc));
            }
        })
    });

    socket.on('disconnect', function (session) {
        console.log('disconnected', session._id)
        socket.emit('message', 'User disconnected');
        if (connections.findIndex(x => x.socket === socket) !== -1) {
            connections.splice(connections.findIndex(x => x.socket === socket), 1)
        }
        socket.leave(session);
    })
});


async function start() {
    try {
        await mongoose.connect(process.env.DATA_BASE, {
            useNewUrlParser: true
        });
        http.listen(PORT, () => {
            console.log('Server started')
        })
        app.use('/', routes);
        app.get('/', function (req, res) {
            res.json({ ok: true })
        })
    } catch (e) {
        console.log(e)
    }
}

start()
