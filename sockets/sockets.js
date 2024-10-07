
const { io } = require("../index");

// Mensaje de sockets
io.on('connection', client => {
    console.log('cliente conectado');

    client.on('disconnect', () => { 
        console.log('cliente desconectado');
        });

    client.on('mensaje', (payload) => {
        console.log( payload);
        io.emit('mensaje', { admin: 'nuevo mensaje desde el servidor'})
    });
});