const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/index.routes')
const app = express()
const config = require('./config/config')
// const mongodb_url ="mongodb+srv://nikita2399020:U2tuPQNIOv6olvWN@bitespeed.ogoah7s.mongodb.net/?retryWrites=true&w=majority"
// const port = 8082

mongoose.connect(config.mongoose.url).then(()=>{console.log("connected successfully")}).catch((error)=>{
    console.log(error)
})

app.use(express.json())
app.use('/v1' ,routes)

app.listen(config.port,()=>{
    console.log("listening on port",config.port)
})