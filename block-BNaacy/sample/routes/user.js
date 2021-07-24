const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('users');
})

router.get('/new',(req,res)=>{
    res.render('userForm');
})

router.post('/',(req,res,next)=> {
    // capture the data
    console.log(req.body);
    // save it to the databse
    User.create(req.body, (err,createdUser)=> {
        if(err){
            return res.redirect('users')
        }
        else {
            console.log(createdUser);
            res.redirect('/')
        }
    })
    // response
})


module.exports = router;