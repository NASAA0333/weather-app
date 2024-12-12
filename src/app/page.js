"use cilent";

import { DayCard, NigthCard } from "./card.jsx";
import { SearchIcon } from "./search.jsx";
export default function Home() {
  return (
    <div className="w-full  h-screen flex  justify-center items-center relative rounded-[30px] overflow-hidden">
      <div className="w-[50%] h-[100%] bg-[#F3F4F6] flex justify-center">
        <div className="bg-white h-[80px] w-[587px] absolute flex justify-center items-center rounded-[48px] gap-[16px] mt-[40px] z-[2] ">
          <SearchIcon />
          <input
            placeholder="Search"
            type="text"
            className="  w-[455px] h-[44px] text-black "
          />
        </div>
        <div className=" w-[414px] h-[828px] mt-[216px] mb-[193px] bg-[#FFFFFF] rounded-[48px] z-[3]">
          <DayCard />
        </div>
      </div>

      <div className="w-[50%] h-[100%] bg-[#F3F4F6] flex flex-col items-center">
        <div className="w-[100%] h-[49%] bg-[#0F141E] relaitve rounded-bl-[32px] "></div>
        <div className="w-[100%] h-[12%] bg-[#0F141E] relaitve"></div>
        <div className="w-[100%] h-[49%] bg-[#0F141E] relaitve rounded-tl-[32px] "></div>
        <div className="w-[414px] h-[828px] mt-[216px] mb-[193px] bg-[#111827] rounded-[48px] z-[3] absolute ">
          <NigthCard />
        </div>
      </div>
      <div className="absolute z-[2] flex gap-[16px] ">
        <img src="./logo-1.png" alt="" />
        <img src="./logo-2.png" alt="" />
      </div>

      <div className="border rounded-full border-gray-500 h-[140px] w-[140px] absolute bg-white "></div>
      <div className="border rounded-full border-gray-500 h-[340px] w-[340px] absolute "></div>
      <div className="border rounded-full border-gray-500 h-[540px] w-[540px] absolute "></div>
      <div className="border rounded-full border-gray-500 h-[940px] w-[940px] absolute "></div>
      <div className="border rounded-full border-gray-500 h-[1340px] w-[1340px] absolute "></div>
      <div className="border rounded-full border-gray-500 h-[1740px] w-[1740px] absolute "></div>
    </div>
  );
}
