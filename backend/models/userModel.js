const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter names!!!'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email address is required!!!'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email address!!!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!!!'],
        select: false
    },
    role: {
        type: String,
    }
})

// Encrypting passowrd before saving user
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }

    this.password = await bcrypt.hash(this.password, 10);
})

// Compare user password
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// Return JWT token
userSchema.methods.getJwtToken  = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    });
}

module.exports = mongoose.model('User', userSchema);