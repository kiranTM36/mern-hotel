const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: validator.isEmail,
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function (value) {
                return validator.isStrongPassword(value, {
                    minLength: 8,
                    minNumbers: 1,
                    minLowercase: 0,
                    minUppercase: 0,
                    minSymbols: 0
                });
            },
            message: "Password must be longer than 8 characters and contain at least 1 number"
        }
    }

});

userSchema.pre('save', async function (next){
    if(!this.isModified('password')) return 
    this.password = await bcrypt.hash(this.password,10)
})

module.exports = mongoose.model('User', userSchema);