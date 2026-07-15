import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const Home = () => {
  return (
    <div className='flex flex-col h-full box-border'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home