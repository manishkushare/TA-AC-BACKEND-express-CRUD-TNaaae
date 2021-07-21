const express = require('express');

const Student = require('../models/students');

const router =express.Router();

// app.set('view engine',"ejs");
// app.set('views',path.join(__dirname,"views"));


router.get('/new',(req,res) => {
    res.render('form');
});
router.post('/',(req,res,next)=> {
    res.send("happy posting")
});
router.get('/',(req,res,next)=> {
    let list = ["ankit", "suraj", "prashant", "ravi"];
    res.render("index",{ "list" : list});
})
router.get('/:id',(req,res,next)=> {
    let id = req.params.id;
    res.render('studentDetails', {student: { name: "rahul", email: "rahul@altcampus.io" }});
})

module.exports = router;