const express = require ('express');
const app = express();


app.get('/', (req , res) => {
    res.end('this server is running at 3005')
});


app.listen(3005 , () => {
    console.log('Server is running at localhost 3005')
});