const express = require('express');
const app = express();
var socket = require('socket.io');
const hepburn = require('hepburn');
const path = require('path');
require('dotenv').config()

const port = process.env.PORT || 5001

app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
});

const server = app.listen(port, () => {
    console.log('Server Started on ' + process.env.PORT);
});

const io = socket(server);

io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);

    socket.on('chat', (data) => {
<<<<<<< HEAD:server/server.js
        console.log('chat', data);
=======
>>>>>>> master:server.js
        const kana = hepburn.toHiragana(data.message);
        if (data.language === 'english') {
        io.sockets.emit('chat', data);
        }
        else if (data.language === 'japanese'){
            const japaneseData = {message: kana, handle: data.handle}
            io.sockets.emit('chat', japaneseData);
        }
    });
});