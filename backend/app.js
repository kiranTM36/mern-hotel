const express = require('express')

const db = require('./db') //DATABASE CONNECTION

//MODEL IMPORT
const userModel = require('./model/userModel')

const app = express()


app.listen(9000, ()=> {
    console.log("Backend Started")
})