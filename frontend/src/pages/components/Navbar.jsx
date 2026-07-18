import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className="h-[13vh] px-5 w-screen fixed top-0 left-1/2 -translate-x-1/2 z-100 flex justify-between items-center backdrop-blur-md "> 
        <Link><h1 className='text-white text-4xl font-bold'>HOTEL</h1></Link>

        <div className="flex gap-5">
                    <Link to='/signup'>
                    <button className="rounded-md cursor-pointer bg-white px-3 py-1 font-semibold text-[#352F2F] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-200">
                      Sign In
                    </button></Link>
        
                    <Link to="/login">
                    <button className="rounded-md border cursor-pointer border-white bg-white/10 px-3 py-1 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#352F2F]">
                      Login
                    </button>
                    </Link>

                  </div>
      </div>
    </div>
  )
}

export default Navbar