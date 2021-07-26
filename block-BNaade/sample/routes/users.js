const express = require('express');
const router = express.Router();
const User = require('../models/user');
router.get('/',(req,res)=> {
    User.find({}, (err,users)=> {
        if(err) return next(err);
        res.render('users',{users:users});
    })
});
 
router.get('/:id',(req,res)=> {
    const id = req.params.id;
    User.findById(id,(err,user)=> {
        if(err) return next(err);
        res.render('user',{user:user});
    })
})

modules.exports = router;