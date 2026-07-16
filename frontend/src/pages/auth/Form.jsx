import React, { useState } from "react";
import hotel from "../../assets/hotel.avif";
import {
  Mail,
  Lock,
  User,
  Hotel,
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

import { Link } from "react-router-dom";


const Form = ({name,onEvent}) => {
  const [data, setData ] = useState({
    username : '',
    email : "",
    password : ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target

    setData({
      ...data,
      [name]:value 
    })

    console.log(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault
    onEvent(data)
  }
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-[#F8F6F3] via-[#F4EFE8] to-[#ECE4D8] flex items-center justify-center px-5">


      <div className="grid h-[88vh] w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">


        {/* LEFT IMAGE */}

        <div
          className="relative hidden lg:block bg-cover bg-center"
          style={{
            backgroundImage: `url(${hotel})`,
          }}
        >

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70"></div>


          <div className="absolute top-8 left-8 flex items-center gap-3 text-white">

            <Hotel size={32}/>

            <h2 className="text-xl font-bold">
              Luxury Stay
            </h2>

          </div>



          <div className="absolute bottom-10 left-10">

            <p className="text-xs uppercase tracking-[5px] text-[#E7D2B5]">
              Premium Experience
            </p>


            <h1 className="mt-3 text-5xl font-bold leading-tight text-white">

              Welcome
              <br/>
              Back

            </h1>


            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-200">

              Experience world-class comfort,
              luxury rooms and unforgettable
              hospitality every time you stay.

            </p>

          </div>


        </div>







        {/* FORM */}


        <div className="flex items-center justify-center bg-[#FCFBF9]">


          <form onSubmit={handleSubmit} className="w-full max-w-md px-8">


            <h2 className="text-3xl font-bold text-[#352F2F]">
              {name}
            </h2>


            <p className="mt-1 text-sm text-gray-500">
              Welcome back! Please login to continue.
            </p>

            {/* Username */}

            { name==="Sign up" && (
              <div className="mt-5">


              <label className="text-sm font-medium text-[#352F2F]">
                Username
              </label>


              <div className="mt-2 flex items-center rounded-xl border border-[#E7DED5] bg-white px-4 focus-within:border-[#C8A97E]">


                <User 
                  size={17}
                  className="text-gray-400"
                />


                <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  onChange={handleChange}
                  className="w-full bg-transparent px-3 py-2.5 text-sm outline-none"
                />


              </div>


            </div>
            )}

            {/* Email */}


            <div className="mt-4">


              <label className="text-sm font-medium text-[#352F2F]">
                Email Address
              </label>


              <div className="mt-2 flex items-center rounded-xl border border-[#E7DED5] bg-white px-4 focus-within:border-[#C8A97E]">


                <Mail
                  size={17}
                  className="text-gray-400"
                />


                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full bg-transparent px-3 py-2.5 text-sm outline-none"
                />


              </div>


            </div>

              {/*Password*/}

            <div className="mt-4">


              <label className="text-sm font-medium text-[#352F2F]">
                Password
              </label>


              <div className="mt-2 flex items-center rounded-xl border border-[#E7DED5] bg-white px-4 focus-within:border-[#C8A97E]">


                <Lock
                  size={17}
                  className="text-gray-400"
                />


                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full bg-transparent px-3 py-2.5 text-sm outline-none"
                />


              </div>


            </div>







            {/* Remember */}


            <div className="mt-4 flex items-center justify-between">


              <label className="flex items-center gap-2 text-xs text-gray-600">


                <input
                  type="checkbox"
                  className="accent-[#352F2F]"
                />


                Remember me


              </label>




              <Link
                to="/forgot-password"
                className="text-xs text-[#C8A97E] hover:underline"
              >
                Forgot Password?
              </Link>


            </div>







            {/* Button */}


            <button
              className="mt-5 w-full rounded-xl bg-gradient-to-r from-[#352F2F] to-[#5A4A3D] py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02]"
            >

              Sign In

            </button>







            {/* Divider */}


            <div className="my-5 flex items-center gap-3">


              <div className="h-px flex-1 bg-gray-300"></div>


              <span className="text-xs text-gray-400">
                OR
              </span>


              <div className="h-px flex-1 bg-gray-300"></div>


            </div>


            <div className="grid grid-cols-2 gap-3">


              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border py-2.5 text-sm transition hover:bg-gray-100"
              >

                <FcGoogle size={20}/>

                Google

              </button>





              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border py-2.5 text-sm transition hover:bg-gray-100"
              >

                <FaFacebookF
                  size={17}
                  className="text-blue-600"
                />

                Facebook

              </button>


            </div>
            <p className="mt-5 text-center text-xs text-gray-500">


              Don't have an account?


              <Link
                to="/signup"
                className="ml-1 font-semibold text-[#352F2F] hover:text-[#C8A97E]"
              >
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Form;