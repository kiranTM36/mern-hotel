const express = require('express')

const db = require('./db') //DATABASE CONNECTION

//MODEL IMPORT
const userModel = require('./model/userModel')

//ROUTE IMPORT
const userRoute = require('./Routes/userRoute')

const app = express()

app.use(express.json())

app.use('/user', userRoute)


app.listen(9000, ()=> {
    console.log("Backend Started")
})