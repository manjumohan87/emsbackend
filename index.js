//config :Loads .env file contents into process.env.
require('dotenv').config();

//import express
const express = require('express');

// import cors
const cors = require('cors')

//import db
require('./db/connection')

//import router
const router = require('./routes/router')


//create  express server
const server = express()


//use cors, json parser in server app
server.use(cors())
server.use(express.json()) // parser
// use router  in server app
server.use(router)

//setup port number for server
const PORT = 4000 || process.env.PORT

//export upload folder as a static file /folder

server.use('/uploads',express.static('./uploads'))

//run the server app in specified port
server.listen(PORT,()=>{
    console.log(`EMS Server Started at port number ${PORT}`);
})

//to resolve http request using express server

server.get('/',(req,res)=>{
    res.send("<h1>EMS server started</h1")
})