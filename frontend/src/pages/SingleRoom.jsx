import React from "react";
import RoomPic from "../assets/R.avif";

const SingleRoom = () => {
  return (
    <div className="min-h-screen bg-[#f6f6f6] flex items-center justify-center p-8">
      <div className="relative w-[90vw] max-w-7xl h-[80vh]">

        {/* Image */}
        <div
          className="absolute left-0 top-1/2 z-20 h-[75%] w-[52%] -translate-y-1/2 overflow-hidden rounded-2xl shadow-2xl"
        >
          <img
            src={RoomPic}
            alt="Room"
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Details */}
        <div className="absolute right-0 h-full w-[72%] rounded-2xl bg-white shadow-2xl">
          <div className="ml-[35%] flex h-full flex-col justify-center px-12">

            <span className="text-sm font-semibold uppercase tracking-widest text-[#8A5A44]">
              Luxury Suite
            </span>

            <h1 className="mt-3 text-5xl font-bold text-[#352F2F]">
              Presidential Suite
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Experience luxury and comfort with panoramic views, premium
              interiors, complimentary breakfast, high-speed Wi-Fi, and
              exceptional hospitality.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-gray-100 p-4">
                🛏️ King Size Bed
              </div>

              <div className="rounded-xl bg-gray-100 p-4">
                📶 Free Wi-Fi
              </div>

              <div className="rounded-xl bg-gray-100 p-4">
                ❄️ Air Conditioning
              </div>

              <div className="rounded-xl bg-gray-100 p-4">
                ☕ Breakfast Included
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Price</p>
                <h2 className="text-4xl font-bold text-[#352F2F]">
                  $249<span className="text-xl"> / Night</span>
                </h2>
              </div>

              <button className="rounded-xl bg-[#352F2F] px-8 py-4 text-white transition hover:bg-[#4B403D]">
                Book Now
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SingleRoom;