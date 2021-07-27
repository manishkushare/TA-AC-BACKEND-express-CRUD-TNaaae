const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
// connect express application with mongodb using mongoose
mongoose.connect('mongodb://localhost/user-diary-2', { useNewUrlParser: true,  useUnifiedTopology: true},(err)=>{
    console.log(err? err: "Connected to databse");
})

const app= express();

// express middlewares
// seeting up ejs
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
// capture form data
app.use(express.urlencoded({extended:false}));

//  routing middlewares
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// error handeling middlewares
app.use((req,res,next)=> {
    res.send("Page not found");
});
app.use((err,req,res,next)=> {
    res.send(err);
})

app.listen(3900,()=> {
    console.log("listening on port 3.9k");
})