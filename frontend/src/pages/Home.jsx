import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const Home = () => {
  return (
    <div className='flex flex-col gap-10 h-[200vh]'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home