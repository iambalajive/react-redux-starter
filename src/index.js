const express = require('express');
const app = express()
const path = require('path');

// export default class Server {
    
// }

// path.resolve(__dirname, '../dist')
console.log(express.static(path.join(__dirname, 'public')))
app.use('xyz',express.static(path.join(__dirname, 'public')));
// app.get('/',(req,res) =>{
//     res.status(200).send('dsddsds')
// })

app.listen(8080);