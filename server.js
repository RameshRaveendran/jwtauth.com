const express = require ('express');
const path = require ('path');
const app = express();

// path implimentation important 
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');


app.get('/', (req , res) => {
    res.render('/public/login.html')
});


app.listen(3005 , () => {
    console.log('Server is running at localhost 3005')
});