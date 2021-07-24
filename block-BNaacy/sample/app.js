// requirements
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// connecting express app to mongodb using mongoose
mongoose.connect('mongodb://localhost/user5', { useNewUrlParser: true ,useUnifiedTopology: true},(err)=> {
    console.log(err? err: "Connected to Databse");
})
// initiating express into application
const app = express();

// middlewares
app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

// routing middlewares
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/user'))

// error handling middlewares
app.use((req,res,next)=> {
    res.send('Page not found');
});
app.use((err,req,res,next)=> {
    res.send(err);
})

app.listen(3100,()=> {
    console.log('listening on port 3.1k');
})