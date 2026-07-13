import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const Home = () => {
  return (
    <div className='flex flex-col h-[200vh] box-border'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home