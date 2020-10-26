const express = require('express');
const app = express();
var socket = require('socket.io');
const hepburn = require('hepburn');

const server = app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
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

    const chat2 = io.of('/chat2');

    chat2.on('chat2', (data) => {
        const kana = hepburn.toHiragana(data.message);
        if (data.language === 'english') {
        io.sockets.emit('chat2', data);
        }
        else if (data.language === 'japanese'){
            const japaneseData = {message: kana, handle: data.handle}
            io.sockets.emit('chat2', japaneseData);
        }
    });
});

// const english = io.of('/english');

// english.on('connection', function(socket) {
//     socket.join('/english')
//     console.log('someone connected to english');
//     english.emit('Welcome!');
// })

// const japanese = io.of('/japanese');

// japanese.on('connection', function(socket) {
//     socket.join('/japanese')
//     console.log('someone connected to japanese');
//     japanese.emit('ようこそ!');
// })