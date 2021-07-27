const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/',(req,res)=> {
    User.find({},(err,users) => {
        if(err) return next(err);
        res.render('allUsers', {users : users});
    });
})

router.get('/:id',(req,res,next)=> {
    const id = req.params.id;
    User.findById(id,(err,user) => {
        if(err) return next(err);
        res.render('user',{user :user});
    })
});



module.exports = router;