// Create client connection
const socket = io.connect('http://localhost:3000');

// DOM selection
var nickname = document.getElementById('nickname');
var message = document.getElementById('message');
var btnSend = document.getElementById('send');
var messages = document.getElementById('messages');
var usersActivity = document.getElementById('users-activity');


// Event emitters

btnSend.addEventListener('click', () => {
    socket.emit('newMessage', {
        nickname: nickname.value,
        message: message.value
    })
    message.value = '';
})

message.addEventListener('keypress', () => {
    socket.emit('typing', nickname.value);
})

// Event listeners
socket.on('newMessage', (data) => {
    messages.innerHTML += `<p><strong> ${data.nickname}</strong>: ${data.message}</p>`;
    usersActivity.innerHTML = '';
});

socket.on('typing', (data) => {
    usersActivity.innerHTML = `<p><i>${data} is typing...</i></p>`;
})