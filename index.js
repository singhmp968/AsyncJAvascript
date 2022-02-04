const express = require('express');
const app = express();
const csv = require('csv-parser');

port = 8000;
app.use('/',require('./routes'))
app.listen(port,function(err){
    if(err){
        console.log(`error in running the ${port}`)
        return;
    }
    console.log(`Server is running @ ${port}`)
})