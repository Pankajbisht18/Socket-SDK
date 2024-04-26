// const WebSocket = require('ws');
// const net = require('net');

let getUserData = (id) => {
    const socket = new WebSocket(`ws://192.168.29.131:8000/ws/first/?is_system=no&combined_id=${id}`)
    
    socket.addEventListener('open', (event) => {
        console.log('server is connected');

        const message = "Hello server"
        socket.send(message)
    })
}

let sendMessage = (id, message) => {
    let previousMessage = []
    const socket = new WebSocket(`ws://192.168.29.131:8000/ws/first/?is_system=no&combined_id=${id}`)
    socket.addEventListener('open', (event) => {
        console.log('server is connected');
        socket.send(message)
    })

    socket.addEventListener('message', (event) => {
        console.log(event.data);
        previousMessage.push(event.data)
    })
    return previousMessage
}



module.exports = {
    getUserData,
    sendMessage,
}