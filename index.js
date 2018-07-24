const express = require('express');
const socket = require('socket.io');
const colors = require('colors');

// Initiating app
const app = express();
app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
    console.log('Server Loaded. Listening to requests on port 3000'.magenta);
});

// Static files
app.use(express.static('public'));

// Socket setup
const io = socket(server);

io.on('connection', (socket) => {
    console.log(`New user connected. ID: ${socket.id}`.yellow);

    // Listeners
    socket.on('newMessage', (data) => {
        /*      console.log(`Sent by '${data.nickname}': ${data.message}`.blue); */
        io.sockets.emit('newMessage', data)
    })

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    })
})