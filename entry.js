import { Server } from "socket.io";

const myServer = new Server(3001, {
    cors: {
        origin: process.env.REACT_APP_CLIENT_URL || "http://localhost:3000",
    }
});

console.log("Tic Tac Toe server is running on port 3001");

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




