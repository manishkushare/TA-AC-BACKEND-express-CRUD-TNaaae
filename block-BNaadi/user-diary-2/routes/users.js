const express = require('express');
const router = express.Router();
const User = require('../models/user');
/*
Read method

*/
router.get('/',(req,res,next)=> {
    User.find({},(err,users)=> {
        if(err) return next(err);
        res.render('users',{users: users});
    })
})


/*
creating user
creating user is two step process first we need to send GET request on users/new url and provide user the form to fill information
and upn submission of form, we need to handle post request on 
/users and capture all the data and save it to the databse
 */
router.get('/new',(req,res)=> {
    res.render('createUser');
})

router.post('/',(req,res)=> {
    User.create(req.body,(err,user)=> {
        if(err) return next(err);
        res.redirect('/users');
    })
})

router.get('/:id/edit',(req,res)=> {
    const id = req.params.id;
    User.findById(id,(err,user)=> {
        if(err) return next(err);
        res.render('updateUserForm', {user:user});
    })
})

router.post('/:id',(req,res)=> {
    const id = req.params.id;
    User.findByIdAndUpdate(id,req.body,{new: true},(err,updatedUser)=> {
        if(err) return next(err);
        res.redirect('/users/' + id);
    })
})

router.get('/:id',(req,res,next)=> {
    const id = req.params.id;
    User.findById(id,(err,user)=> {
        if(err) return next(err);
        res.render('singleUser',{user:user})
    })
    
})

router.get('/:id/delete',(req,res,next)=> {
    const id = req.params.id;
    User.findByIdAndDelete(id,(err,deletedBook)=> {
        if(err) return next(err);
        res.redirect('/users');
    })
})

module.exports = router;