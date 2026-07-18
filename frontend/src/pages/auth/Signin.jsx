import React from "react";
import Form from "./Form";
import axios from "axios";

const Signin = () => {
  const handleSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:9000/user/signin",
        data,{
          withCredentials : true
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert("Signup Successfully");
      } else {
        alert("Registration Failed");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Server Error");
    }
  };

  return <Form name="Sign up" onEvent={handleSubmit} />;
};

export default Signin;