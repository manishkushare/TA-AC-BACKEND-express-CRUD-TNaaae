const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=> {
    res.render('users',{users : 
        [
            {
                name : "Manish",
                age : 25
            },
            {
                name: "Karan",
                age: 30
            },
            {
                name: "Aditya",
                age : 24
            }
        ]
    })
});

router.get('/new',(req,res,next)=> {
    console.log('💋');
    res.render('userForm');
})

router.get('/:id',(req,res,next)=>{
    let id = req.params.id;
    console.log(
        "hey"
    );
    res.render('singleUser',{user : {name : "Manish", age: 25}});
});



module.exports = router;