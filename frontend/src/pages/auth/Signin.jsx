import React from 'react'
import Form from './Form'
import axios from 'axios'

const Signin = () => {
    const handleSubmit = async(data) => {
        const response = await axios.post("",data)
    }
  return (
    <Form name="Sign up" onEvent={handleSubmit} />
  )
}

export default Signin