import React from "react";
import { Link } from "react-router-dom";
import RoomPic from "../../assets/R.avif";
import { Users, BedDouble, Wifi } from "lucide-react";

const Card = () => {
  return (
    <Link to='room/view'>
      <div className="group flex h-44 overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg">

        {/* Image */}
        <img
          src={RoomPic}
          alt="Room"
          className="w-64 object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-5">

          {/* Top */}
          <div className="flex justify-between">

            <div>
              <h2 className="text-xl font-semibold text-[#352F2F]">
                Deluxe Room
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Room #204
              </p>
            </div>

            <div className="text-right">
              <h2 className="text-2xl font-bold text-[#352F2F]">
                Rs.2500
              </h2>

              <p className="text-xs text-gray-500">
                per night
              </p>
            </div>

          </div>

          {/* Features */}

          <div className="flex gap-5 text-sm text-gray-600">

            <div className="flex items-center gap-1">
              <Users size={16} />
              2 Guests
            </div>

            <div className="flex items-center gap-1">
              <BedDouble size={16} />
              King Bed
            </div>

            <div className="flex items-center gap-1">
              <Wifi size={16} />
              WiFi
            </div>

          </div>

          {/* Bottom */}

          <div className="flex items-center justify-between">

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Available
            </span>

            <button className="rounded-lg bg-[#352F2F] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#4A3F35]">
              Book Now
            </button>

          </div>

        </div>
      </div>
    </Link>

  );
};

export default Card;