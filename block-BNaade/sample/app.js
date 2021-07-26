const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb://localhost:/user5',(err)=>{
    console.log(err? err: "Connected to database");
})

const app = express();

// middlewares
app.set('view engine','ejs');
app.set('views', path.join(__dirname,"views"));
// routing middlewares
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'))
// error handling middlewares
app.use((req,res,next)=>{
    res.send("page not found");
})
app.use((err,req,res,next)=> {
    res.send(err);
})
app.listen(4500,()=>{
    console.log("listening on port 4.5k");
});