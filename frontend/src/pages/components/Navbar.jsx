import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className="h-[13vh] px-5 w-screen fixed top-0 left-1/2 -translate-x-1/2 z-100 flex justify-between items-center backdrop-blur-md "> 
        <Link><h1 className='text-white text-4xl font-bold'>HOTEL</h1></Link>
      </div>
    </div>
  )
}

export default Navbar