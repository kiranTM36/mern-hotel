import React from "react";
import RoomPic from "./../../assets/R.avif";
import {
  Users,
  BedDouble,
  Bath,
  Wifi,
  Tv,
  CheckCircle,
} from "lucide-react";

const Card = () => {
  return (
    <div className="group flex h-[230px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:shadow-xl">

      {/* Room Image */}
      <div className="relative h-full w-[35%] overflow-hidden rounded-xl">
        <img
          src={RoomPic}
          alt="room"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-3 top-3 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
          Available
        </span>
      </div>


      {/* Room Details */}
      <div className="flex flex-1 flex-col justify-between px-5 py-2">

        {/* Top */}
        <div>
          <div className="flex justify-between">

            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Deluxe King Room
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Spacious room with modern facilities
              </p>
            </div>


            <div className="text-right">
              <p className="text-sm text-gray-500">
                Per Night
              </p>

              <h3 className="text-2xl font-bold text-blue-600">
                Rs. 2500
              </h3>
            </div>

          </div>


          {/* Room Features */}
          <div className="mt-5 flex flex-wrap gap-3">

            <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm">
              <Users size={16}/>
              2 Guests
            </span>


            <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm">
              <BedDouble size={16}/>
              King Bed
            </span>


            <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm">
              <Bath size={16}/>
              Bathroom
            </span>


            <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm">
              <Wifi size={16}/>
              WiFi
            </span>


            <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm">
              <Tv size={16}/>
              TV
            </span>

          </div>


          {/* Facilities */}
          <div className="mt-4 flex items-center gap-2 text-sm text-green-600">
            <CheckCircle size={17}/>
            Free cancellation available
          </div>

        </div>


        {/* Bottom Button */}
        <div className="flex items-center justify-between border-t pt-3">

          <p className="text-sm text-gray-500">
            Room No: 204
          </p>


          <button className="rounded-xl bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700">
            Book Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default Card;