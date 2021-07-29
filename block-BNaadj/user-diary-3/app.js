const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb://localhost:/user-dairy-3',{ useNewUrlParser: true,useUnifiedTopology: true },(err)=> {
    console.log(err? err: "Connected to Database");
})
const app = express();

// middlewares
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: false}));
// routing middleware
app.use('/',require('./routes/index'));
app.use('/users', require('./routes/users'));
// error handeling middlewares
app.use((req,res,next)=> {
    res.send('Page not found');
})
app.use((err,req,res,next)=> {
    res.send(err);
})


app.listen(3300,()=> {
    console.log("lisening on port 3.3 k");
})