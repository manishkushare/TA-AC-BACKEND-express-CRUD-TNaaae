const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
// connect express application with mongodb using mongoose
mongoose.connect(' mongodb://127.0.0.1:27017/school', { useNewUrlParser: true, useUnifiedTopology: true }, (err)=> {
    console.log(err ? err : "Connected to database");
})

// initializing express applicatio
const app = express();

// middleware
app.use(express.json());
// ejs
app.set('view engine','ejs');
app.set("views",path.join(__dirname,'views'));

// routing middleware
app.get('/',(req,res)=>{
    console.log("hey")
    res.render('index');
})

// error handeling middleware
app.use((req,res,next)=> {
    res.send('Page not found');
});
app.use((err,req,res,next)=> {
    res.send(err);
})

app.listen(4000,()=> {
    console.log("listening on port 4k");
})