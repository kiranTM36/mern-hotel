const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        validate : {
            validator : validator.isEmail, 
            message : "Please Enter valid Email"
        }
    },
    password : {
        type : String,
        trim : true,
        validate : {
            validator : (value)=>
                validator.isStrongPassword(value, {
                    minLength : 8,
                    minNumbers : 1
                }),
                message : "Password Length should br more than 8 with 1 Number"   
        }
    }
})

module.exports = mongoose.model('user',userSchema)