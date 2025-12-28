//instance 
const express = require('express');
// server app
const app = express();

//route
app.get('/',(req , res) => {
    res.send('server is live')
})


//server started
app.listen(3003 , () => {
    console.log('server started at 3003');
});