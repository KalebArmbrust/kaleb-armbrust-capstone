const express = require('express');
const app = express();
var socket = require('socket.io');
const hepburn = require('hepburn');
const path = require('path');

app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
});

const server = app.listen(5000, () => {
    console.log('Server Started on ' + process.env.PORT);
});

const io = socket(server);

io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);

    socket.on('chat', (data) => {
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