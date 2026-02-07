import { Server } from "socket.io";

const myServer = new Server(8080, {
    cors: {
        origin: process.env.REACT_APP_CLIENT_URL || "*",
    }
});

console.log("Tic Tac Toe server is running on port 8080");

const playersConnected = [];



myServer.on("connection", (socket) => {
    console.log("New client connected:", socket.id);
    socket.on('test-message', (data) => console.log(data))

    socket.on('registerPlayer',(playerName) => {
        console.log(`Player registered: ${playerName}`);
        playersConnected.push(playerName);
        socket.emit('playersConnected', playersConnected);
    })
})




