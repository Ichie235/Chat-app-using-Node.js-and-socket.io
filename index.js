const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const PORT = 5000||process.env.PORT

const app = express()

// This is needed in other to use socket.io
const server = http.createServer(app)
const io = socketio(server);

//Run when client connects
io.on('connection',(socket)=>{
    console.log('User connected...')
    
    socket.emit('message','Welcome to Chat Room')
})

app.use(express.static('public'))

app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.render("chat")
})

server.listen(PORT,()=>{
    console.log(`server is connected successfully on http://localhost:${PORT}`)
})
