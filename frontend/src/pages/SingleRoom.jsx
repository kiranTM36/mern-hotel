import React from 'react'


const SingleRoom = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className=' h-[80vh] w-[80vw] relative'>
          <div className='h-4/5 w-[60%] bg-amber-300 absolute top-1/10 z-10 rounded-2xl shadow-2xl'></div>
          <div className='h-full w-4/5 bg-blue-400 absolute right-0 rounded-2xl shadow-2xl'></div>
      </div>
    </div>
  )
}

export default SingleRoom