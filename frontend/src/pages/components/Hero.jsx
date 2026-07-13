import React from 'react'
import sunsetImg from './../../assets/sunset.webp'

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] w-full overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${sunsetImg})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end mb-15 px-6 text-center text-white">
          <h1 className="mb-5 text-5xl font-bold">
            Luxury Hotel Experience
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-gray-200">
            Discover comfort, elegance, and unforgettable hospitality.
            Book your perfect stay with premium rooms and world-class services.
          </p>

          <div className="flex gap-5">
            <button className="rounded-md bg-white px-8 py-3 font-semibold text-[#352F2F] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-200">
              View Rooms
            </button>

            <button className="rounded-md border-2 border-white bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#352F2F]">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="h-[20vh] w-[95%] rounded-2xl bg-[#352F2F] shadow-xl"></div>
    </div>
  )
}

export default Hero