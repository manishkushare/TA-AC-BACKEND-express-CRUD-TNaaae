const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    age : Number,
    address : String,
    bio : String,
    hobbies : String
});

const User = mongoose.model("User",userSchema);
module.exports = User;