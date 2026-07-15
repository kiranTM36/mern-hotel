import React from "react";
import {
  Search,
  CalendarDays,
  Users,
  MapPin,
  Star,
} from "lucide-react";
import Card from "./components/Card";

const Rooms = () => {
  return (
    <div className="h-screen overflow-hidden bg-[#F8F6F3]">

      <div className="mx-auto flex h-full max-w-7xl flex-col px-4">


        {/* Fixed Header Area */}
        <div className="sticky top-0 z-20 bg-[#F8F6F3]/90 backdrop-blur-md py-4">


          {/* Hotel Info */}
          <div className="mb-4">

            <h1 className="text-3xl font-bold text-[#352F2F]">
              Hotel Everest View
            </h1>

            <div className="mt-2 flex gap-5 text-sm text-gray-500">

              <div className="flex items-center gap-1">
                <MapPin size={16}/>
                Itahari, Nepal
              </div>


              <div className="flex items-center gap-1">
                <Star 
                  size={16}
                  fill="#C8A97E"
                  color="#C8A97E"
                />
                4.8 (243 Reviews)
              </div>

            </div>

          </div>



          {/* Filter Bar */}
          <div className="rounded-2xl border border-[#E9E3DA] bg-white p-3 shadow-sm">

            <div className="grid grid-cols-4 gap-3">


              <div className="flex items-center gap-3 rounded-xl bg-[#F8F6F3] px-4 py-3">

                <Search size={18}/>

                <input
                  placeholder="Search room..."
                  className="w-full bg-transparent outline-none"
                />

              </div>



              <div className="flex items-center gap-3 rounded-xl bg-[#F8F6F3] px-4 py-3">
                <CalendarDays size={18}/>
                Check In
              </div>


              <div className="flex items-center gap-3 rounded-xl bg-[#F8F6F3] px-4 py-3">
                <CalendarDays size={18}/>
                Check Out
              </div>


              <div className="flex items-center gap-3 rounded-xl bg-[#F8F6F3] px-4 py-3">
                <Users size={18}/>
                2 Guests
              </div>


            </div>

          </div>

        </div>



        {/* Main Content */}
        <div className="flex flex-1 gap-6 overflow-hidden py-4">


          {/* Room List */}

          <div className="w-[70%] space-y-5 overflow-y-auto pr-2 scrollbar-none">

            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

          </div>



          {/* Booking Panel */}

          <div className="w-[30%]">

            <div className="sticky top-4 rounded-3xl border border-[#E8E2D9] bg-white p-6 shadow-lg">


              <h2 className="text-2xl font-semibold text-[#352F2F]">
                Booking Summary
              </h2>


              <div className="mt-6 space-y-5">


                <div>
                  <p className="text-sm text-gray-500">
                    Check In
                  </p>
                  <h3 className="font-medium">
                    25 July 2026
                  </h3>
                </div>


                <div>
                  <p className="text-sm text-gray-500">
                    Check Out
                  </p>
                  <h3 className="font-medium">
                    27 July 2026
                  </h3>
                </div>


                <div>
                  <p className="text-sm text-gray-500">
                    Guests
                  </p>
                  <h3 className="font-medium">
                    2 Adults
                  </h3>
                </div>


                <div className="border-t pt-5">

                  <p className="text-sm text-gray-500">
                    Selected Room
                  </p>

                  <h3 className="font-semibold text-[#352F2F]">
                    Deluxe King Room
                  </h3>

                </div>


                <div className="flex justify-between border-t pt-5">

                  <span className="font-medium">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-[#352F2F]">
                    Rs.5000
                  </span>

                </div>


                <button className="w-full rounded-xl bg-[#352F2F] py-3 font-medium text-white transition hover:bg-[#4B433B]">
                  Reserve Now
                </button>


              </div>

            </div>

          </div>


        </div>

      </div>

    </div>
  );
};

export default Rooms;