import React from 'react'
import hotelImg from './../../assets/hotel.jpg'

const Hero = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-9 mt-20">
      <div
        className="relative h-[55vh] w-[90%] rounded-2xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${hotelImg})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10">
          <h1 className="text-5xl font-bold mb-4">
            Luxury Hotel Experience
          </h1>

          <p className="text-lg max-w-2xl text-gray-200 mb-8">
            Discover comfort, elegance, and unforgettable hospitality.
            Book your perfect stay with premium rooms and world-class services.
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-3 bg-white text-[#352F2F] font-semibold rounded-md shadow-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300">
              View Rooms
            </button>

            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-md bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#352F2F] hover:scale-105 transition-all duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="h-[20vh] w-[90%] bg-[#352F2F] rounded-2xl"></div>
    </div>
  )
}

export default Hero