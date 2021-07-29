const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/',(req,res)=> {
    User.find({},(err,users)=>{
        if(err) return next(err);
        res.render('users',{users:users});
    })
});

router.get('/new',(req,res)=> {
    res.render('createUser');
});

router.post('/',(req,res,next)=> {
    User.create(req.body,(err,users)=> {
        if(err) return next(err);
        res.redirect('/users');
    })
});

router.get('/:id',(req,res,next)=> {
    const id= req.params.id;
    User.findById(id,(err,user) => {
        if(err) return next(err);
        res.render('singleUser',{user:user});
    })
});

router.get('/:id/edit',(req,res)=> {
    const id = req.params.id;
    User.findById(id,(err,user)=>{
        if(err) return next(err);
        res.render('updateForm.ejs',{user:user});
    })
})

router.post('/:id',(req,res)=> {
    const id = req.params.id;
    User.findByIdAndUpdate(id,req.body,(err,user)=> {
        if(err) return next(err);
        res.redirect(`/users/${id}`);
    })
})

router.get('/:id/delete',(req,res)=> {
    const id = req.params.id
    User.findOneAndDelete(id,(err,users)=> {
        res.redirect('/users');
    })
})

module.exports = router;