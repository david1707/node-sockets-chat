# Node Sockets chat

A real time chat using socket.io library

## Getting Started

These instructions will tell you how to download, run and use this project:

### Installing

```
git clone https://github.com/david1707/weather-app
npm install
```

Then run it with:
```
npm start
```

### What it does

Once you run the app, you run the index.js: The server file. Now, you can go into your route (or http://localhost:3000/ if you're running it in a local setting). 

Every window is a new user (using the methods in 'client.js' file). Right now the app let's you to:

- Specify a name and a message, then click the 'Send' button. This will send the data into the server and the server will broadcast it to every user.
- When a user is typing, shows a message that says ' USER is typing... ' to let the users know that someone is typing

![alt text](https://i.imgur.com/gEaegOW.png)

### Future updates

- The user own nickname and message will show at the right side, to easily find their own messages
- Every user will select his own in-chat nickname colour to easily identify messages that belong to the same user.
- The date when the message was sent on a tooltip
- Disabling the 'Send' button for a few seconds so users won't spam the chat
- Improving the style

## Built With

* [Node.JS](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [Socket.io](https://socket.io/) - Socket.IO enables real-time bidirectional event-based communication.
* [Colors](https://www.npmjs.com/package/colors) - Colours for console.log messages
* [Nodemon](https://nodemon.io/) - Utility for developers

## Authors

* **David Membrives** - *Initial work* - [david1707](https://github.com/david1707)

## License

This project is licensed under the ISC License
