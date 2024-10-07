const { log } = require("console");
const express = require("express");

require("dotenv").config();
const path = require("path");

// App de express
const app = express();

// Node Server
const server = require("http").createServer(app);
module.exports.io = require('socket.io')(server);
require("./sockets/sockets.js")

// Ruta publica
const publicPath = path.resolve(__dirname, 'public');
app.use( express.static( publicPath ));

// Puerto en el que se esta ejecutando
server.listen(process.env.PORT, (err) => {

    if (err) throw new Error(err);
    
    console.log(`Corriendo en el puerto: ` + process.env.PORT);
});