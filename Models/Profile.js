const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    username: {type:String, max:100, required:true},
    password: {type:String, max:100, required:true},
    first_name: {type:String, max:100, required:true},
    last_name: {type:String, max:100, required:true},
    email: {type:String, max:100, required:true},
    gender: {type:String, max:100},
    birthday: {type:Date, required:true},
    last_logedIn: {type: Date},
    password_expires_In:{type:Number}
});

module.exports = mongoose.model('users', userProfileSchema);