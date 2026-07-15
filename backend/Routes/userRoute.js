const userModel = require('../model/userModel')
const bcrypt = require('bcrypt')
const router = require('express').Router()
const jwt = require('jsonwebtoken')

router.post('/signin', async(req, res)=> {
    try {
        const data = req.body

        const newUser = new userModel(data)

        const response = await newUser.save()

        res.status(200).json({
            message : "Signup Sucessfull",
            response
        })
    } catch (error) {
        console.log("Server Error + "+error)
        res.status(500).json({
            message : "Server Error"
        })
    }
})

router.post('/login', async(req, res) => {
    try {
        const data = req.body

        const user = await userModel.findOne({email : data.email})

        if(!user){
            return res.status(404).json({
                message : "User Not Found"
            })
        }

        const isMatch = await bcrypt.compare(data.password , user.password)

        if(!isMatch){
            return res.status(400).json({
                message : "Password Error"
            })
        }

        const token = jwt.sign({id : user._id, email : user.email}, 'hahaha',{
            expiresIn : '30d'
        })

        res.cookie('token', token)
        console.log(token)

        return res.status(200).json({
                message : "Login Sucessfull",
                token
            })

    } catch (error) {
        console.log("Server Error + "+error)
        res.status(500).json({
            message : "Server Error"
        })
    }
})


module.exports = router

