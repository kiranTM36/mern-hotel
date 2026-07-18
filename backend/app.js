const express = require('express')
const cors = require('cors')

const db = require('./db') //DATABASE CONNECTION

//MODEL IMPORT
const userModel = require('./model/userModel')
const roomModel = require('./model/roomModel')

//ROUTE IMPORT
const userRoute = require('./Routes/userRoute')
const roomRoute = require('./Routes/roomRoute')

const app = express()

app.use(express.json())
app.use(
    cors({
        origin : "http://localhost:5173",
        credentials : true
    })
)

app.use('/user', userRoute)
app.use('/room', roomRoute)


app.listen(9000, ()=> {
    console.log("Backend Started")
})