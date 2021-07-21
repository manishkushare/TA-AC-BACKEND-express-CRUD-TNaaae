const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/students');
const path = require('path');
mongoose.connect('mongodb://127.0.0.1:27017/students',{ useNewUrlParser: true ,useUnifiedTopology: true},(err)=>{
    console.log(err? err: "Database Connected");
})
const app = express();

// middlewares
app.use(express.json());
app.set('view engine',"ejs");
app.set('views',path.join(__dirname,"views"));

// routing middleware
app.use('/',require('./routes/index'));
app.use('/students',require('./routes/students'));

// error handeling middleware
app.use((req,res,next)=> {
    res.send("page not found");
})
app.use((err,req,res,next)=>{
    res.send(err);
});
// set port
app.listen(4000,()=> {
    console.log("listeing on port 4k");
})