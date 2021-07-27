const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/user5',(err)=> {
    console.log(err? err: "Connected to database");
});

const app= express();

// middlewares
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// routing middlewares
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
// error handeling middlewares
app.use((req,res,next)=> {
    res.send('Page not found');
})
app.use((err,req,res,next)=>{
    res.send(err);
})

app.listen(4200,()=> {
    console.log("listening on server 4.2k");
})