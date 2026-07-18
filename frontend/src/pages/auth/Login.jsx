import React from 'react'
import Form from './Form'
import axios from 'axios'

const Login = () => {
    const handleSubmit = async(data) => {
        const response = await axios.post("http://localhost:9000/user/login",data)
    } 
  return (
    <Form name="Login" />
  )
}

export default Login