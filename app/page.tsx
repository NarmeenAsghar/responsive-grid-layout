import React from "react";

export default function Home() {
  return (
    <div className="grid grid-rows-[100px_200px_200px_100px] grid-cols-3 gap-3 p-2">
      <div className="text-[28px] bg-gradient-to-tl from-violet-800 via-red-400 to-purple-500 sm:bg-gradient-to-r sm:from-blue-500 sm:to-red-500 sm:text-[30px] md:text-[36px] md:bg-gradient-to-l md:from-purple-600 md:to-emerald-400 lg:text-[44px] lg:bg-gradient-to-b lg:from-violet-500 lg:to-pink-500 col-span-3 font-bold text-center content-center border-2 border-black ">
        Header
      </div>
      <div className="text-[28px] bg-gradient-to-tl from-violet-800 via-red-400 to-purple-500 sm:bg-gradient-to-r sm:from-blue-500 sm:to-red-500 sm:text-[30px] md:text-[36px] md:bg-gradient-to-l md:from-purple-600 md:to-emerald-400 lg:text-[44px] lg:bg-gradient-to-b lg:from-violet-500 lg:to-pink-500 row-span-2  font-bold text-center content-center border-2 border-black">
        Sidebar
      </div>
      <div className="text-[28px] bg-gradient-to-tl from-violet-800 via-red-400 to-purple-500 sm:bg-gradient-to-r sm:from-blue-500 sm:to-red-500 sm:text-[30px] md:text-[36px] md:bg-gradient-to-l md:from-purple-600 md:to-emerald-400 lg:text-[44px] lg:bg-gradient-to-b lg:from-violet-500 lg:to-pink-500 col-span-2  font-bold text-center content-center border-2 border-black">
        Content-1
      </div>
      <div className="text-[28px] bg-gradient-to-tl from-violet-800 via-red-400 to-purple-500 sm:bg-gradient-to-r sm:from-blue-500 sm:to-red-500 sm:text-[30px] md:text-[36px] md:bg-gradient-to-l md:from-purple-600 md:to-emerald-400 lg:text-[44px] lg:bg-gradient-to-b lg:from-violet-500 lg:to-pink-500  font-bold text-center content-center border-2 border-black">
        Content-2
      </div>
      <div className="text-[28px] bg-gradient-to-tl from-violet-800 via-red-400 to-purple-500 sm:bg-gradient-to-r sm:from-blue-500 sm:to-red-500 sm:text-[30px] md:text-[36px] md:bg-gradient-to-l md:from-purple-600 md:to-emerald-400 lg:text-[44px] lg:bg-gradient-to-b lg:from-violet-500 lg:to-pink-500  font-bold text-center content-center border-2 border-black">
        Content-3
      </div>
      <div className="text-[28px] bg-gradient-to-tl from-violet-800 via-red-400 to-purple-500 sm:bg-gradient-to-r sm:from-blue-500 sm:to-red-500 sm:text-[30px] md:text-[36px] md:bg-gradient-to-l md:from-purple-600 md:to-emerald-400 lg:text-[44px] lg:bg-gradient-to-b lg:from-violet-500 lg:to-pink-500 col-span-3 font-bold text-center content-center border-2 border-black">
        Footer
      </div>
    </div>
  );
}
