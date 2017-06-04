const express = require('express');
const app = express()
const path = require('path');

app.use(express.static(path.join(__dirname, 'app')));
app.get('/',(req,res) =>{
    res.render('index.html')
})

app.listen(8080);