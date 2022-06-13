var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

//declarar
var cliente = 0;

io.on('connection', (socket)=>{
    cliente++;
    io.sockets.emit('broadcast',{
        information: cliente + ' Clientes conectados'
    });

    console.log("un usuario se ha conectado");
    
    socket.on('disconnet', ()=>{
        cliente--;
        io.socket.emit('broadcast',{
            information: cliente + ' Clientes conectados'
        });
    })

    //recibir datos del cliente
    socket.on('clientEvent', (data)=>{
        console.log(data);
    });

    //tiempo de espera
    setTimeout(()=>{
        socket.send('Mensaje despues de 4 segundos');
    }, 4000);

    socket.on('disconnect', ()=>{
        console.log("Un usuario se ha desconectado");
    })
});

http.listen(3000, ()=>{
    console.log('Escuchando puerto: 3000');
})