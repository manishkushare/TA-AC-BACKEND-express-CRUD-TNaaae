const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb://127.0.0.1:27017/userDiary',
{ useNewUrlParser: true ,useUnifiedTopology: true },
(err => {
    console.log(err? err: "Connected to Database");
}))
const app = express();
// middleware
app.use(express.json());
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views') );

// routing middleware

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// error handeling middleware
app.use((req,res,next)=> {
    res.send('Page not found');
})
app.use((err,req,res,next)=> {
    res.send(err);
})

// listening on port
app.listen(4500,()=>{
    console.log('listening on port 4.5k');
})