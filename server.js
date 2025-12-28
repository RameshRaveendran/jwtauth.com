
require('dotenv').config();
//instance 
const express = require('express');
const path = require ('path');
const connectDB = require("./config/db")
// server app
const app = express();


//route
app.get('/',(req , res) => {
    res.send('server is live')
});

// db calling allways add top of the server
connectDB();
//server started
app.listen(3003 , () => {
    console.log('server started at 3003');
});